import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isOccupied: boolean;

  @Column({ type: 'uuid', nullable: true })
  assignedTo: string;

  @Column({ type: 'timestamptz' })
  assignedDate: Date;

  @Column({ default: 1000 })
  rentForDay: number;
}
