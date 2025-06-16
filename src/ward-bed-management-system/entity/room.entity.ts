import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Check(`"numberOfBeds" >= 3 AND "numberOfBeds" <= 20`)
export class Room {
  @PrimaryGeneratedColumn('uuid')
  room_id: string;

  @Column({ type: 'uuid' })
  ward_id: string;

  @Column()
  numberOfBeds: number;
}
