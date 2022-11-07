import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { DefaultStrategy } from '../strategies/default.strategy';
import { UsersModule } from './users.module';
import { AuthController } from '../controllers/auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'default' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, DefaultStrategy],
  exports: [AuthService],
})
export class AuthModule {}
