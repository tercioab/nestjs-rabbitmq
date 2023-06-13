import { Controller, Get, Body, Post, Param, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  async create(@Body() product: CreateProductDto) {
    const products = await this.productService.create(product);
    this.client.emit('CREATE_PRODUCT', products);
    return product;
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.productService.findById(id);
  }
}
