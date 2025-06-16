import { Type } from 'class-transformer';
import {
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsUUID,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  Matches,
  IsString,
} from 'class-validator';

export class CreatePrescriptionDto {
    @IsString({message:"paitentid must be a string"})
  @IsUUID(4, { message: 'Patient ID must be a valid UUID v4' })
  @IsNotEmpty({ message: 'Patient ID is required' })
  patientId: string;

  @IsArray({ message: 'Medicine IDs must be an array' })
  @ArrayNotEmpty({ message: 'Medicine IDs array should not be empty' })
  @IsUUID('4', {
    each: true,
    message: 'Each medicine ID must be a valid UUID v4',
  })
  medicineIds: string[];

  @IsOptional()
  @IsDateString(
    {},
    { message: 'Recorded date must be a valid ISO date string' },
  )
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Recorded date must be in YYYY-MM-DD format',
  })
  @Type(() => Date)
  date: Date;
}
