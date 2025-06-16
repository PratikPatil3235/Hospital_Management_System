import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Surgery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  surgeryName: string;

  @Column()
  price: number;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  attendedBy: string;

  @Column({ type: 'timestamptz' })
  surgeryDate: Date;
}
