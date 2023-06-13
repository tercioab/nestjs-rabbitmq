import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  image: string;

  @Prop()
  likes: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  sale: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
