// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

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
      return res(ctx.delay(300), ctx.status(200), ctx.json({ ...response }));
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
      return res(ctx.delay(300), ctx.status(200), ctx.json({ ...response }));
    }
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
          code: 123,
          description: 'Something went wrong'
        }
      };
      return res(
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
      ctx.status(200),
      ctx.json({
        ...response
      })
    );
  })
];
