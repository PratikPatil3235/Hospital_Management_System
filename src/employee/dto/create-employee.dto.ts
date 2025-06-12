import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateEmployeeDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'value entered must be a string' })
  @MaxLength(200, {
    message: 'Maximum length of name should be 100 characters',
  })
  @Matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
    message: 'Name must contain only letters and single spaces.',
  })
  name: string;

  @IsString({ message: 'Value entered must be a string' })
  @MaxLength(100)
  specialization: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @Length(10, 10, { message: 'Phone number must be exactly 10 digits' })
  @Matches(/^[0-9]{10}$/, { message: 'Phone number must contain only digits' })
  phone: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(150, { message: 'Email should be less that 150 characters' })
  @IsString({ message: 'Email should be a string' })
  email: string;

  @IsBoolean({ message: 'avaliblity should have values as true, false' })
  isAvaliable: boolean;

  @IsNotEmpty({ message: 'role is required' })
  @IsEnum(Role, {
    message:
      'Role should be one of doctor, nurse, lab_tech, driver,hr, receptionist',
  })
  role: Role;

  @IsNotEmpty({ message: 'please provide a hospital Id' })
  @IsUUID(4, { message: 'Please provide a valid hospital Id' })
  hId: string;
}
