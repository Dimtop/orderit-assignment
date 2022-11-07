import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../controllers/users.controller';
import { Buyer, BuyerSchema } from '../models/buyers.model';
import { User, UserSchema } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'users',
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Buyer.name,
        schema: BuyerSchema,
        collection: 'buyers',
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
