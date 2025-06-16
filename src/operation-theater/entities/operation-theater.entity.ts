import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OperationTheater {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  isAvaliable: boolean;

  @Column({ type: 'uuid', array: true, nullable: true })
  surgeryId: string[];
}
