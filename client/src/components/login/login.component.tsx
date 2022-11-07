import { Button, InputPicker, Loader, Panel } from 'rsuite';
import { loginThunk } from '../../slices/auth.slice';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Text from '../text/text.component';
import { mapToPickerData } from '../../utils/app.utils';
import { useEffect, useState } from 'react';
import { getAllUsersThunk } from '../../slices/users.slice';

const Login = (props: any) => {
  const dispatch = useDispatch<any>();
  const isUserAuthenticated = useSelector((state: any) => state.auth.isUserAuthenticated);
  const users = useSelector((state: any) => state.users.users);
  const [email, setEmail] = useState('');
  const usersLoading = useSelector((state: any) => state.users.loading);

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return isUserAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <div className="container">
      <Panel id="login" bordered shaded>
        {usersLoading ? (
          <Loader />
        ) : (
          <>
            <Text size="2rem" weight="bold">
              Login
            </Text>
            <InputPicker
              data={mapToPickerData(users, 'email', 'email')}
              value={email}
              onChange={(value) => setEmail(value)}
            />
            <Button
              id="loginButton"
              className="mainButton"
              onClick={() => {
                dispatch(loginThunk({ email }));
              }}>
              Login
            </Button>
          </>
        )}
      </Panel>
    </div>
  );
};

export default Login;
