import { Slot } from 'src/enums/slot.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 6, scale: 2, default: 300 })
  appointmentPrice: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  scheduledAt: Date;

  @Column({ type: 'enum', enum: Slot })
  slot: Slot;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  doctorId: string;
}
