import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Matches,
} from 'class-validator';

export class CreateOutPatientVisitDto {
  @IsNotEmpty({ message: 'Patient ID is mandatory' })
  @IsUUID('4', { message: 'Patient ID must be a valid UUID v4' })
  patientId: string;

  @IsNotEmpty({ message: 'Doctor ID is mandatory' })
  @IsUUID('4', { message: 'Doctor ID must be a valid UUID v4' })
  doctorId: string;

  @IsOptional()
  @IsDateString({}, { message: 'Visited date must be a valid ISO date string' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Visited date must be in YYYY-MM-DD format',
  })
  visitedDate?: string;
}
