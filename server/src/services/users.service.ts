import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument, UserModel } from '../models/users.model';
import { IUsersGetDTO } from '../types/users.types';
import { convertUserDocumentToUsersGetDTO } from '../utils/users.utils';
import { Buyer, BuyerModel } from '../models/buyers.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private usersModel: UserModel,
    @InjectModel(Buyer.name)
    private buyersModel: BuyerModel,
  ) {}

  async getAll(): Promise<IUsersGetDTO[]> {
    return (await this.buyersModel.find().populate('user')).map((user) =>
      convertUserDocumentToUsersGetDTO(user),
    );
  }

  async findOneBy(discriminator: string, value: any): Promise<UserDocument> {
    return await this.usersModel.findOne({ [discriminator]: value });
  }
}
