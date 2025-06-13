import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ambulance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  bookedAt: Date;

  @Column({ type: 'uuid' })
  hospitalId: string;

  @Column({ type: 'uuid' })
  driverId: string;
}
