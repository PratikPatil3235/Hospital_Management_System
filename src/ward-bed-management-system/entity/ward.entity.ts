import { Max, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ward {
  @PrimaryGeneratedColumn('uuid')
  ward_id: string;

  @Column()
  @Max(5)
  @Min(1)
  floorNo: number;

  @Column()
  @Max(10)
  @Min(3)
  numberOfRooms: number;
}
