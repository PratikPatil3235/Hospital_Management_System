import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsUUID,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreateAmbulanceSystemDto {
  @IsOptional()
  @IsBoolean({ message: 'isAvailable must be a boolean value (true/false)' })
  isAvailable?: boolean;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'bookedAt must be a valid ISO date string (e.g., 2025-06-13)',
    },
  )
  @Type(() => Date)
  bookedAt?: Date;

  @IsUUID('4', { message: 'hospitalId must be a valid UUID v4' })
  @IsNotEmpty({ message: 'Hospital Id is mandatory' })
  hospitalId: string;

  @IsUUID('4', { message: 'driverId must be a valid UUID v4' })
  @IsNotEmpty({ message: 'driver Id is mandatory' })
  driverId: string;
}
