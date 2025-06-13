import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateInPatientStayDto {
  @IsNotEmpty({ message: 'Patient ID should not be empty' })
  @IsUUID('4', { message: 'Invalid Patient ID. Must be a UUID v4' })
  patientId: string;

  @IsNotEmpty({ message: 'Doctor ID should not be empty' })
  @IsUUID('4', { message: 'Invalid Doctor ID. Must be a UUID v4' })
  doctorId: string;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'Admitted date must be a valid ISO format date string',
    },
  )
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Admitted date must be in YYYY-MM-DD format',
  })
  admittedAt?: string;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'Discharged date must be a valid ISO format date string',
    },
  )
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Discharged date must be in YYYY-MM-DD format',
  })
  dischargedAt?: string;

  @IsOptional()
  @IsString({ message: 'Notes should be a string' })
  @MaxLength(1000, { message: 'Maximum length for notes is 1000 characters' })
  notes?: string;

  @IsOptional()
  @IsUUID('4', { message: 'Invalid Nurse ID. Must be a UUID v4' })
  nurseId?: string;
}
