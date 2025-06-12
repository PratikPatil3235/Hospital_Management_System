import { Role } from 'src/enums/role.enum';
import { Hospital } from 'src/Hospital/entity/hospital.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  e_Id: string;

  @Column({ length: 200 })
  e_Name: string;

  @Column({ length: 100, nullable: true })
  e_Specialization: string;

  @Column({ type: 'enum', enum: Role })
  e_Role: Role;

  @Column({ length: 150, unique: true })
  e_Email: string;

  @Column({ length: 10, unique: true })
  e_Phone: string;

  @Column({ nullable: true })
  isAvaliable: boolean;

  @ManyToOne(() => Hospital )
  @JoinColumn({ name: 'h_id' })
  hospital: Hospital;
}
