import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = new this.ProductModel(product);
    return createdProduct.save();
  }

  async findAll() {
    return this.ProductModel.find().exec();
  }

  async findById(id: number) {
    return this.ProductModel.findOne({ _id: id });
  }
}
