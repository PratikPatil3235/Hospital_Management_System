import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OutPatientVisit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  doctorId: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  visitedDate: Date;
}
