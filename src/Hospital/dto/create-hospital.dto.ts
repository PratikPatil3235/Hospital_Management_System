import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateHospitalDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Value entered must be a string' })
  @MaxLength(100, {
    message: 'Maximum length of name should be 100 characters',
  })
  @Matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
    message: 'Name must contain only letters and single spaces.',
  })
  name: string;

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
  @IsEmail({}, { message: 'Please enter a valid Email addres' })
  @MaxLength(100, { message: 'Email must not exceed 100 characters' })
  @IsString({ message: 'Value entered must be a string' })
  email: string;

  @IsNotEmpty({ message: 'Specialization is required' })
  @IsString({ message: 'Value entered must be a string' })
  @MaxLength(100)
  specialization: string;
}
