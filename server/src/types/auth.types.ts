import { IUsersGetDTO } from './users.types';

export interface IUserValidationData {
  user?: IUsersGetDTO;
  isValid: boolean;
  message?: string;
}
