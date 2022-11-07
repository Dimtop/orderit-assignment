import { BuyerDocument } from '../models/buyers.model';

import { IUsersGetDTO } from '../types/users.types';

export const convertUserDocumentToUsersGetDTO = (
  buyer: BuyerDocument,
): IUsersGetDTO => {
  return {
    id: buyer.user._id.toString(),
    email: buyer.user.email,
    buyerId: buyer._id.toString(),
  };
};
