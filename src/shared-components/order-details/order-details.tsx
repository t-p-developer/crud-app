import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import * as React from 'react';

// eslint-disable-next-line max-len
import { useNewOrderContext } from '../../feature-components/new-orders-controller/new-order-controller/new-order-controller';
import { ErrorContent, InfoBox, PageContainer } from './styles';

export const OrderDetails = () => {
  const {
    // @ts-ignore
    newOrderState: { isFetching, result, error }
  } = useNewOrderContext();

  if (error) {
    return (
      <PageContainer>
        <ErrorContent>
          <Alert severity='error'>
            <AlertTitle>{error?.code}</AlertTitle>
            {error?.description}
          </Alert>
        </ErrorContent>{' '}
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <InfoBox>
        {isFetching ? (
          <>
            <Skeleton animation='wave' height={30} width={350} />
            <Skeleton animation='wave' height={28} width={300} />
            <Skeleton animation='wave' height={26} width={325} />
            <Skeleton animation='wave' height={24} width={200} />
          </>
        ) : (
          <>
            <Typography variant='h5'>Client name: {result?.details?.clientName}</Typography>
            <Typography variant='h6'>Order number: {result?.details?.orderNr}</Typography>
            <Typography variant='body1'>Sales of source: {result?.details?.salesSource}</Typography>
            <Typography variant='body2'>Segment: {result?.details?.segment}</Typography>
          </>
        )}
      </InfoBox>
    </PageContainer>
  );
};
