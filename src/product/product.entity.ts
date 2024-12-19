import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number; //ID DO PRODUTO 

  @Column()
  name: string; //ISSO DAQUI É O NOME DO PRODUTO

  @Column()
  quantity: number; //ISSO DAQUI É A QUANTIDADE

  @Column({ default: 5 })
  lowStockThreshold: number; //ISSO DAQUI É O NIVEL DE ESTOQUE
}
