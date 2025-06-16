import { Type } from 'class-transformer';
import { IsUUID, IsNotEmpty, IsDateString, Matches } from 'class-validator';

export class CreateAnestesiaRecordDto {
  @IsNotEmpty({ message: 'Recorded date is required.' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'recordedDate must be in YYYY-MM-DD format',
  })
  @Type(() => Date)
  @IsDateString(
    {},
    { message: 'Recorded date must be a valid ISO date string.' },
  )
  recordedDate: Date;

  @IsNotEmpty({ message: 'Surgery ID is required.' })
  @IsUUID('4', { message: 'Surgery ID must be a valid UUID.' })
  surgeryId: string;

  @IsNotEmpty({ message: 'Patient ID is required.' })
  @IsUUID('4', { message: 'Patient ID must be a valid UUID.' })
  patientId: string;
}
