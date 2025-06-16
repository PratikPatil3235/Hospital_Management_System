import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnestesiaRecord {
  @PrimaryGeneratedColumn('uuid')
    id: string;
    
  @Column({ type: 'timestamptz' })
    recordedDate: Date;
    
  @Column({ type: 'uuid' })
    surgeryId: string;
    
    @Column({type:"uuid"})
    patientId: string;
}
