import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn('uuid')
  h_Registration_No: string;

  @Column({ length: 100 })
  h_Name: string;

  @Column({ length: 500 })
  h_Address: string;

  @Column({ length: 10 })
  h_Phone: string;

  @Column({ unique: true, length: 100 })
  h_Email: string;

  @Column({ length: 100 })
  h_Specialization: string;
}
