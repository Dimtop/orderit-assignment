import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'rsuite';
import { getAllOrdersThunk } from '../../slices/orders.slice';
const { Column, HeaderCell, Cell } = Table;

const Orders = (props: any) => {
  const orders = useSelector((state: any) => state.orders.orders);
  const ordersLoading = useSelector((state: any) => state.orders.loading);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (!orders || orders.length === 0) {
      dispatch(getAllOrdersThunk());
    }
  }, [orders, dispatch]);

  return (
    <div id="orders" className="container">
      <Table fillHeight data={orders} loading={ordersLoading} wordWrap virtualized>
        <Column flexGrow={1} align="center">
          <HeaderCell>Order Number</HeaderCell>
          <Cell dataKey="orderNumber" />
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Delivery address</HeaderCell>
          <Cell>
            {(rowData) =>
              `${rowData.deliveryAddress.address}, ${rowData.deliveryAddress.area}, ${rowData.deliveryAddress.postCode}`
            }
          </Cell>
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Supplier</HeaderCell>
          <Cell>{(rowData) => `${rowData.supplier?.companyDetails.name || '-'}`}</Cell>
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Delivery Date</HeaderCell>
          <Cell>{(rowData) => new Date(rowData.deliveryDate).toDateString()}</Cell>
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Cost</HeaderCell>
          <Cell>{(rowData) => `$${rowData.cost}`}</Cell>
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Status</HeaderCell>
          <Cell>{(rowData) => rowData.status}</Cell>
        </Column>
        <Column flexGrow={1} align="center">
          <HeaderCell>Products</HeaderCell>
          <Cell>
            {(rowData) =>
              rowData.products
                ?.map((product: any) => `${product.name} x ${product.quantity}`)
                .join(', ')
            }
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default Orders;
