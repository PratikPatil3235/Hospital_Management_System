import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateMedicineDto {
  @IsString({ message: 'Entered value should be string' })
  @IsNotEmpty({ message: 'Name is a required field' })
  @MinLength(2, {
    message: 'Name of medicine should have at least 2 characters',
  })
  @MaxLength(200, {
    message: 'Name of medicine should in between 1-200 characters',
  })
  medicineName: string;

  @Type(() => Number)
  @IsInt({ message: 'Price should be a number' })
  @IsNotEmpty({ message: 'Prise is a required field' })
  @Min(0, { message: 'Minimum price start from 0' })
  @Max(10000, { message: 'Maximum value for price is 10000 rs' })
  price: number;

  @IsDateString(
    {},
    { message: 'Recorded date must be a valid ISO date string' },
  )
  @IsNotEmpty({ message: 'Expire Date is a required field' })
  expireDate: string;
}
