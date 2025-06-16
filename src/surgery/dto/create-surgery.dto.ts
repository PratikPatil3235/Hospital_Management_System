import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateSurgeryDto {
  @IsString({ message: 'Entered value should be string' })
  @IsNotEmpty({ message: 'Name is a required field' })
  @MinLength(2, {
    message: 'Name of medicine should have at least 2 characters',
  })
  @MaxLength(200, {
    message: 'Name of medicine should in between 1-200 characters',
  })
  surgeryName: string;

  @Type(() => Number)
  @IsInt({ message: 'Price should be a number' })
  @IsNotEmpty({ message: 'Prise is a required field' })
  @Min(0, { message: 'Minimum price start from 0' })
  price: number;

  @IsNotEmpty({ message: 'date should not be empty' })
  @IsDateString(
    {},
    { message: 'Recorded date must be a valid ISO date string' },
  )
  surgeryDate: string;

  @IsString({ message: 'paitentid must be a string' })
  @IsUUID(4, { message: 'Patient ID must be a valid UUID v4' })
  @IsNotEmpty({ message: 'Patient ID is required' })
  patientId: string;

  @IsUUID(4, { message: 'Patient ID must be a valid UUID v4' })
  @IsNotEmpty({ message: 'Patient ID is required' })
  attentedBy: string;
}
