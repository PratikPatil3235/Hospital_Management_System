import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../../enums/gender.enum';
import { BloodGroup } from '../../enums/bloodgroup.enum';

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

  @Column({length:150 ,unique:true})
  p_email: string;

  @Column({
    type: 'enum',
    enum: BloodGroup,
  })
  p_BloodGroup: BloodGroup;

  @Column({ length: 500 })
  p_Address: string;

  @Column({ length: 10, unique: true })
  p_Phone: string;
}
