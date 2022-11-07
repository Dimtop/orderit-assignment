import {
  IGenericResponse,
  ILoginData,
  IOrdersGetReponseData,
  IUserGetReponseData
} from '../types/api.types';
import { toaster } from 'rsuite';
import Error from '../components/error/error.component';
import Cookies from 'js-cookie';

const buildQueryStringFromFiltersObject = (filters: any) => {
  return `?${Object.entries(filters)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')}`;
};

const getHeaders = (isAuthenticatedEndpoint: boolean) => {
  let authenticationHeaders = {};
  if (isAuthenticatedEndpoint) {
    authenticationHeaders = {
      Authorization: `Bearer ${Cookies.get('accessToken')}`
    };
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
    ...authenticationHeaders
  };
};

const makeApiCall = async (
  isAuthenticatedEndpoint: boolean,
  method: string,
  path: string,
  body?: any,
  callback?: (...args: any[]) => any
) => {
  return await fetch(process.env.REACT_APP_API_URL + path, {
    method,
    body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : null,
    headers: getHeaders(isAuthenticatedEndpoint),
    credentials: 'include'
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.success) {
        toaster.push(<Error message={res.message} />);
        setTimeout(() => {
          toaster.clear();
        }, 1000);
      }
      return res;
    });
};

export const login = async (loginData: ILoginData): Promise<IGenericResponse> =>
  await makeApiCall(false, 'POST', '/auth/login', loginData);
export const getAllUsers = async (): Promise<IUserGetReponseData> =>
  await makeApiCall(false, 'GET', '/users/all');
export const getAllOrders = async (): Promise<IOrdersGetReponseData> =>
  await makeApiCall(false, 'GET', '/orders');
export const getUserProductPreferences = async (filters: any): Promise<IGenericResponse> =>
  await makeApiCall(
    false,
    'GET',
    '/orders/productPreferences' + buildQueryStringFromFiltersObject(filters)
  );
export const getOrdersCostPerDay = async (filters: any): Promise<IGenericResponse> =>
  await makeApiCall(
    false,
    'GET',
    '/orders/ordersCostPerDay' + buildQueryStringFromFiltersObject(filters)
  );
export const getOrdersNumberPerDay = async (filters: any): Promise<IGenericResponse> =>
  await makeApiCall(
    false,
    'GET',
    '/orders/ordersNumberPerDay' + buildQueryStringFromFiltersObject(filters)
  );
