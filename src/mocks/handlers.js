// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { newOrderDb } from './order-db';

export const handlers = [
  // eslint-disable-next-line consistent-return
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body;

    if (username === 'test@test.ee' && password === 'password1234') {
      sessionStorage.setItem('is-authenticated', 'true');
      const response = {
        message: {
          success: true,
          description: '',
          data: [],
          type: ''
        }
      };
      return res(ctx.delay(1500), ctx.status(200), ctx.json({ ...response }));
    }
    if (username !== 'test@test') {
      const response = {
        message: {
          success: false,
          description: '',
          data: [],
          type: 'error'
        },
        error: {
          code: 123,
          description: 'Something went wrong'
        }
      };
      return res(ctx.delay(1500), ctx.status(401), ctx.json({ ...response }));
    }
  }),
  rest.post('/logout', (req, res, ctx) => {
    sessionStorage.clear();
    const response = {
      message: {
        success: true,
        description: '',
        data: [],
        type: ''
      }
    };
    return res(ctx.delay(1500), ctx.status(200), ctx.json({ ...response }));
  }),
  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      const response = {
        message: {
          success: false,
          description: '',
          data: [],
          type: 'error'
        },
        error: {
          code: 403,
          description: 'Forbidden'
        }
      };
      return res(
        ctx.delay(1500),
        ctx.status(403),
        ctx.json({
          ...response
        })
      );
    }

    const response = {
      message: {
        success: true,
        description: '',
        data: [],
        type: 'user'
      },
      user: {
        id: 1,
        username: ''
      }
    };

    return res(
      ctx.delay(1500),
      ctx.status(200),
      ctx.json({
        ...response
      })
    );
  }),

  rest.get('/new-orders', (req, res, ctx) => {
    const paginatedResponse = {
      message: {
        success: true,
        description: '',
        data: [],
        type: 'newOrderList'
      },
      newOrderList: []
    };

    paginatedResponse.newOrderList = newOrderDb.newOrderList.findMany({});

    return res(ctx.delay(1500), ctx.status(200), ctx.json({ ...paginatedResponse }));
  }),

  rest.get('/new-orders/:id', (req, res, ctx) => {
    const { id } = req.params;

    const filteredOrders = newOrderDb.newOrderList.findMany({
      where: {
        orderNr: {
          equals: +id
        }
      }
    });

    const filterOrder = {
      message: {
        success: true,
        description: '',
        data: [],
        type: 'newOrder'
      },
      newOrder: {}
    };

    filterOrder.newOrder.details = { ...filteredOrders[0] };

    if (filterOrder.newOrder.details.orderNr === +id) {
      return res(ctx.delay(1500), ctx.status(200), ctx.json({ ...filterOrder }));
    }

    const response = {
      message: {
        success: false,
        description: '',
        data: [],
        type: 'error'
      },
      error: {
        code: 123,
        description: 'Something went wrong'
      }
    };
    return res(ctx.delay(1500), ctx.status(401), ctx.json({ ...response }));
  })
];
