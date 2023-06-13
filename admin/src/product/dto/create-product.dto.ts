import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  likes: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  sale: boolean;
}
