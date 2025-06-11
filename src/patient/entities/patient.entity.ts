import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../gender.enum';
import { BloodGroup } from '../bloodgroup.enum';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  p_id: string;

  @Column({length:200})
  p_Name: string;

  @Column()
  p_Age: number;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  p_Gender: Gender;

  @Column({
    type: 'enum',
    enum: BloodGroup,
  })
  p_BloodGroup: BloodGroup;

  @Column({ length: 500 })
  p_Address: string;

  @Column({ length: 10 })
  p_Phone: string;
}
