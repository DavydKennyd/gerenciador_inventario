import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Get('low-stock')
  getLowStockProducts(): Promise<Product[]> {
    return this.productService.findLowStock();
  }
}
