import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InPatientStay {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  doctorId: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  admittedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  dischargedAt: Date;

  @Column({ length: 1000, nullable: true })
  notes: string;

  @Column({ type: 'uuid', nullable: true })
  nurseId: string;
}
