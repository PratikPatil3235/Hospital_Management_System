import { MonitoredTime } from 'src/enums/monitoredTime.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VitalMonitoring {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'blood_pressure', length: 8 })
  bloodPressure: string;

  @Column({ name: 'heart_rate', length: 7 })
  heartRate: string;

  @Column({ type: 'uuid' })
  patientId: string;

  @Column({ type: 'uuid' })
  nurseId: string;

  @Column({ type: 'enum', enum: MonitoredTime })
  monitoredTime: MonitoredTime;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
