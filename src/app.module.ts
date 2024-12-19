import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'inventory_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // **Apenas para desenvolvimento**
    }),
    ProductModule,
    MovementModule,
  ],
})
export class AppModule {}
