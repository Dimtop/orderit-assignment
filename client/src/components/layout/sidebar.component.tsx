import { Nav, Sidenav, Drawer } from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import ListIcon from '@rsuite/icons/List';
import BarLineChartIcon from '@rsuite/icons/BarLineChart';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../slices/app.slice';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/router.constants';

const Sidebar = (props: any) => {
  const isMenuOpen = useSelector((state: any) => state.app.isMenuOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Drawer open={isMenuOpen} placement="left" size="xs" onClose={() => dispatch(toggleMenu())}>
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Sidenav>
            <Sidenav.Body>
              <Nav activeKey="1">
                <Nav.Item
                  eventKey="1"
                  icon={<DashboardIcon />}
                  onClick={() => navigate(routes.ROOT_ROUTE)}>
                  Dashboard
                </Nav.Item>
                <Nav.Menu eventKey="2" title="Orders" icon={<ListIcon />}>
                  <Nav.Item eventKey="2-1" onClick={() => navigate(routes.ALL_ORDERS)}>
                    View all orders
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Item
                  eventKey="3"
                  icon={<BarLineChartIcon />}
                  onClick={() => navigate(routes.ANALYTICS)}>
                  Analytics
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default Sidebar;
