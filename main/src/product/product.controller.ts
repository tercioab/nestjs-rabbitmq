import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { EventPattern } from '@nestjs/microservices';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  creates(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @EventPattern('CREATE_PRODUCT')
  async create(product: any) {
    console.log(`produto ${product.title} criado`);
    return this.productService.create({
      title: product.title,
      image: product.image,
      likes: product.likes,
      price: product.price,
      sale: product.sale,
    });
  }
}
