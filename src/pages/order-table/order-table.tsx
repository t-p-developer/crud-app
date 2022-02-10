import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

import { useLoginContext } from '../../feature-components/login-form-controller/login-form-controller';
import { LargeSpinner } from '../../shared-components/loaders/large-loader';
import { PageContainer } from './styles';

export const OrderTable = () => {
  const { handleLogOut, isLoading } = useLoginContext();

  const [rows, setRows] = React.useState([]);

  const columns: GridColDef[] = [
    {
      field: 'status',
      headerName: 'Status'
    }
  ];

  React.useEffect(() => {
    setRows([]);
    return () => {
      setRows([]);
    };
  }, []);

  if (isLoading) {
    return <LargeSpinner />;
  }

  return (
    <PageContainer>
      <Button type='button' sx={{ position: 'absolute', right: '20px', top: '20px' }} onClick={() => handleLogOut()}>
        Log out
      </Button>
      <Typography variant='h1' sx={{ marginBottom: '30px' }}>
        Orders
      </Typography>
      <DataGrid columns={columns} rows={rows} />
    </PageContainer>
  );
};
