import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid', array: true })
  medicineId: string[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
