import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class DefaultStrategy extends PassportStrategy(Strategy, 'default') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: any): Promise<any> {
    const userValidationData = await this.authService.validateUser(
      req.body.email,
    );

    if (!userValidationData.isValid) {
      throw new UnauthorizedException(userValidationData.message);
    }
    return userValidationData.user;
  }
}
