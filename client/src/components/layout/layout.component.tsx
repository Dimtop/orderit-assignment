import Header from './header.component';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.component';

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
