import { Type } from 'class-transformer';
import {
  IsUUID,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsDateString,
  IsEnum,
  Matches,
} from 'class-validator';
import { Slot } from 'src/enums/slot.enum';

export class CreateAppointmentDto {
  @Type(() => Number)
  @IsNumber({}, { message: 'Appointment price must be a number' })
  @Min(0, { message: 'Price must be at least 0' })
  @Max(9999.99, { message: 'Price must not exceed 9999.99' })
  @IsOptional()
  appointmentPrice?: number;

  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'Scheduled date must be a valid ISO format date string',
    },
  )
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'scheduledAt must be in YYYY-MM-DD format',
  })
    @Type(()=>Date)
  scheduledAt?: Date;

  @IsEnum(Slot, {
    message: 'Slot should be one of morning, afternoon, or evening',
  })
  slot: Slot;

  @IsUUID('4', { message: 'Invalid patient ID. Must be a UUID v4' })
  patientId: string;

  @IsUUID('4', { message: 'Invalid doctor ID. Must be a UUID v4' })
  doctorId: string;
}
