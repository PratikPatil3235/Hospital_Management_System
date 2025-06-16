import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('uuid')
  m_Id: string;

  @Column({ length: 200, unique: true })
  medicineName: string;

  @Column()
  price: number;

  @Column({ type: 'timestamptz' })
  expireDate: Date;
}
