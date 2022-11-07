import { Nav, Navbar } from 'rsuite';
import './header.css';
import AdminIcon from '@rsuite/icons/Admin';
import ExitIcon from '@rsuite/icons/Exit';
import MenuIcon from '@rsuite/icons/Menu';
import { useSelector } from 'react-redux';
import { userRoleToString } from '../../utils/app.utils';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { toggleMenu, changeTheme } from '../../slices/app.slice';
import VisibleIcon from '@rsuite/icons/Visible';
import Cookies from 'js-cookie';
import { useState } from 'react';

const Header = (props: any) => {
  const [role] = useState(Cookies.get('role'));
  const [email] = useState(Cookies.get('email'));
  const theme = useSelector((state: any) => state.app.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Navbar id="header">
        <Nav>
          <Nav.Item icon={<MenuIcon />} onClick={() => dispatch(toggleMenu())}></Nav.Item>
        </Nav>
        <Navbar.Brand>Orderit</Navbar.Brand>
        <Nav pullRight>
          <Nav.Item
            icon={<VisibleIcon />}
            onClick={() => {
              dispatch(changeTheme());
            }}>
            {theme.toUpperCase()}
          </Nav.Item>
          <Nav.Menu icon={<AdminIcon />} title={`${email} - ${userRoleToString(Number(role))}`}>
            <Nav.Item
              icon={<ExitIcon />}
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}>
              Logout
            </Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
