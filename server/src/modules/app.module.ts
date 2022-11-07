import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import dbConfig from '../config/db.config';
import authConfig from '../config/auth.config';
import { AppController } from '../controllers/app.controller';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { AppService } from '../services/app.service';
import { OrdersModule } from './orders.module';
import { ProductsModule } from './products.module';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig, authConfig],
    }),
    MongooseModule.forRoot(
      process.env.DB_URI,
      dbConfig().database.authentication,
    ),
    OrdersModule,
    ProductsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
