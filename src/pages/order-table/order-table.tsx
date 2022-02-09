import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

import { PageContainer } from './styles';

export const OrderTable = () => {
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

  return (
    <PageContainer>
      <Typography variant='h1' sx={{ marginBottom: '30px' }}>
        Blog list
      </Typography>
      <DataGrid columns={columns} rows={rows} />
    </PageContainer>
  );
};
