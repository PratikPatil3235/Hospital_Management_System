import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateWardDto {
  @Type(() => Number)
  @IsInt({ message: 'floorNo should be a number' })
  @IsNotEmpty({ message: 'floorNo is a required field' })
  @Min(1, { message: 'Minimum floorNo start from 1' })
  @Max(5, { message: 'Maximum floorNo ends at 5' })
  floorNo: number;

  @Type(() => Number)
  @IsInt({ message: 'numberOfRooms should be a number' })
  @IsNotEmpty({ message: 'numberOfRooms is a required field' })
  @Min(3, { message: 'Minimum numberOfRooms start from 3' })
  @Max(10, { message: 'Maximum numberOfRooms ends at 5' })
  numberOfRooms: number;
}
