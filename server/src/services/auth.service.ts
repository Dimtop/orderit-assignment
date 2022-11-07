import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUserValidationData } from '../types/auth.types';
import { IUsersGetDTO } from '../types/users.types';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string): Promise<IUserValidationData> {
    const user = await this.usersService.findOneBy('email', email);
    const allUsers = await this.usersService.getAll();

    if (user) {
      if (!user.active) {
        return {
          isValid: false,
          message: 'This user is not valid',
        };
      }

      return {
        user: {
          id: user._id.toString(),
          email: user.email,
          buyerId: allUsers.find((e) => e.id == user._id.toString()).buyerId,
        },
        isValid: true,
      };
    }

    return {
      isValid: false,
      message: 'The user was not found',
    };
  }

  async login(user: IUsersGetDTO): Promise<IUsersGetDTO> {
    return user;
  }
}
