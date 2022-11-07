import {
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { DefaultAuthGuard } from '../guards/default-auth.guard';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @UseGuards(DefaultAuthGuard)
  @Post('/login')
  async login(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const loginMetadata = await this.authService.login(req.user);
    if (loginMetadata.id) {
      return loginMetadata;
    } else {
      throw new UnauthorizedException('Υπήρξε κάποιο πρόβλημα.');
    }
  }
}
