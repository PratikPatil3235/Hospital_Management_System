import { IsUUID, IsInt, Min, Max, IsString, IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsUUID('4', { message: '' })
  @IsString({ message: 'Ward Id must be a string' })
  @IsNotEmpty({ message: 'Ward id Should not be empty' })
  ward_id: string;

  @IsNotEmpty({
    message: 'you must enter how many beds present in a single room',
  })
  @IsInt({ message: 'Number of beds must be an integer' })
  @Min(3, { message: 'A room must have at least 3 beds' })
  @Max(20, { message: 'A room can have at most 20 beds' })
  numberOfBeds: number;
}
