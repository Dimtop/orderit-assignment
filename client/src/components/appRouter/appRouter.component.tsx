import { Routes, Route } from 'react-router-dom';
import Login from '../login/login.component';
import Auth from '../auth/auth.component';
import NotFound from '../default/notFound.component';
import Layout from '../layout/layout.component';
import Dashboard from '../dashboard/dashboard.component';
import { routes } from '../../constants/router.constants';
import Orders from '../orders/orders.component';
import Analytics from '../analytics/analytics.component';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Auth />}>
          <Route element={<Layout />}>
            <Route path={routes.ROOT_ROUTE} element={<Dashboard />} />
            <Route path={routes.ALL_ORDERS} element={<Orders />} />
            <Route path={routes.ANALYTICS} element={<Analytics />} />
          </Route>
        </Route>
        <Route path={routes.LOGIN_ROUTE} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
