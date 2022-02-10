import { useQuery } from 'react-query';

import { getData } from '../api/api';

export const useNewOrders = () =>
  // @ts-ignore
  useQuery({
    queryKey: ['/new-orders'],
    queryFn: () => getData('/new-orders'),
    options: {
      keepPreviousData: true
    }
  });

export const useNewOrder = ({ id }: { id: string | undefined }) =>
  // @ts-ignore
  useQuery({
    queryKey: ['/new-orders', id],
    queryFn: () => getData(`/new-orders/${id}`),
    options: {
      keepPreviousData: true
    }
  });
