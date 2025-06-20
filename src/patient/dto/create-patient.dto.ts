import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Gender } from '../../enums/gender.enum';
import { BloodGroup } from '../../enums/bloodgroup.enum';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'value entered must be a string' })
  @MaxLength(200, {
    message: 'Maximum length of name should be 100 characters',
  })
  @Matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
    message: 'Name must contain only letters and single spaces.',
  })
  name: string;

  @IsNotEmpty({ message: 'Age is required' })
  @IsInt({ message: 'Age must be an integer' })
  @Min(0, { message: 'age must be greater than 0' })
  @Max(150, { message: 'Age should not exceed 150' })
  age: number;

  @IsNotEmpty({ message: 'Gender is required' })
  @IsEnum(Gender, { message: 'Gender must be one of: male, female, other' })
  gender: Gender;

  @IsNotEmpty({ message: 'BloodGroup is required' })
  @IsEnum(BloodGroup, {
    message: 'BloodGroup must be one of: A+,A-,B+,B-,AB+,AB-,O+,O-',
  })
  bloodGroup: BloodGroup;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString({ message: 'Value entered must be a string' })
  @MaxLength(500, {
    message: 'Maximum length of address should be 500 characters',
  })
  address: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @Length(10, 10, { message: 'Phone number must be exactly 10 digits' })
  @Matches(/^[0-9]{10}$/, { message: 'Phone number must contain only digits' })
  phone: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(150, { message: 'Email should be less that 150 characters' })
  @IsString({ message: 'Email should be a string' })
  email: string;
}
