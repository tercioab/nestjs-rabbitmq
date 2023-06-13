import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductSchema, Product } from './schema/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:astrowest@localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
