import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  active: boolean;
  @Prop({ required: true })
  isVerified: boolean;
  @Prop({ required: true })
  hasTwoFA: boolean;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  hashedPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
export type UserModel = Model<UserDocument>;
