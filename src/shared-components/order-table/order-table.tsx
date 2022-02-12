import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useNewOrdersContext } from '../../feature-components/new-orders-controller/new-orders-controller';
import { PageContainer } from './styles';

export const OrderTable = () => {
  const navigate = useNavigate();

  const [rows, setRows] = React.useState([]);

  const [pageSize, setPageSize] = React.useState<number>(5);

  const {
    // @ts-ignore
    newOrderListState: { result, isLoading: isLoadingNewOrders }
  } = useNewOrdersContext();

  const columns: GridColDef[] = [
    {
      field: 'orderNr',
      headerName: 'Order Nr',
      width: 150
    },
    {
      field: 'clientName',
      headerName: 'Name / Company',
      width: 200
    },
    {
      field: 'segment',
      headerName: 'Segment',
      width: 150
    },
    {
      field: 'salesSource',
      headerName: 'Sales source',
      width: 300
    }
  ];

  React.useEffect(() => {
    if (result) {
      setRows(result);
    }
    return () => {
      setRows([]);
    };
  }, [result]);

  return (
    <PageContainer>
      <Typography variant='h1' sx={{ marginBottom: '30px' }}>
        Orders
      </Typography>
      <div style={{ height: `${pageSize * 52 + 106}px`, width: '100%' }}>
        <DataGrid
          headerHeight={52}
          getRowId={(row) => row.orderNr}
          columns={columns}
          rows={rows}
          loading={isLoadingNewOrders}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          onRowClick={(params) => {
            navigate(`/new-orders/${params?.row?.orderNr}`);
          }}
        />
      </div>
    </PageContainer>
  );
};
