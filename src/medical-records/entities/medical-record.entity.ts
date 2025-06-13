import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('diagnosis-report')
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  testName: string;

  @Column({ length: 500 })
  results: string;

  @Column({ length: 500 })
  allergies: string;

  @Column()
  price: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  recorded_Date: Date;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  recordedBy: string;
}
