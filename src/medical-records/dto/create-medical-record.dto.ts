import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateMedicalRecordDto {
  @MaxLength(200, {
    message: 'Test name should not exceed 200 characters',
  })
  @IsString({ message: 'Test name must be a string' })
  @IsNotEmpty({ message: 'Test name is required' })
  testName: string;

  @MaxLength(500, {
    message: 'Results should not exceed 500 characters',
  })
  @IsString({ message: 'Results must be a string' })
  @IsNotEmpty({ message: 'Results are required' })
  results: string;

  @MaxLength(500, {
    message: 'Allergies should not exceed 500 characters',
  })
  @IsString({ message: 'Allergies must be a string' })
  @IsNotEmpty({ message: 'Allergies are required' })
  allergies: string;

  @IsInt({ message: 'Price must be a valid number' })
  @Min(0, { message: 'Minimum price is 0' })
  @Max(5000, { message: 'Maximum price is 5000' })
  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'Recorded date must be a valid ISO date string',
    },
  )
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Recorded date must be in YYYY-MM-DD format',
  })
  @Type(() => Date)
  recorded_Date?: Date;

  @IsUUID(4, { message: 'Patient ID must be a valid UUID v4' })
  @IsNotEmpty({ message: 'Patient ID is required' })
  patientId: string;

  @IsUUID(4, { message: 'RecordedBy ID must be a valid UUID v4' })
  @IsNotEmpty({ message: 'RecordedBy ID is required' })
  recordedBy: string;
}
