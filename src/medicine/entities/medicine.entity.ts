import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  medicineName: string;

  @Column()
  price: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  expireDate: Date;
}
