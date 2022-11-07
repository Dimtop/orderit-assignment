import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/all')
  async getAll(): Promise<any> {
    return await this.usersService.getAll();
  }
}
