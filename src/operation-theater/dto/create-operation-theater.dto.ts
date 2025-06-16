import { IsArray, IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class CreateOperationTheaterDto {
  @IsBoolean({ message: 'isAvailable must be a boolean value' })
  @IsOptional()
  isAvaliable?: boolean;

  @IsArray({ message: 'surgeryId must be an array of UUIDs' })
  @IsUUID('4', {
    each: true,
    message: 'Each surgeryId must be a valid UUID v4',
  })
  @IsOptional()
  surgeryId?: string[];
}
