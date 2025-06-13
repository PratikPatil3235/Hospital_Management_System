import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
} from 'class-validator';
import { MonitoredTime } from 'src/enums/monitoredTime.enum';

export class CreateVitalMonitoringDto {
  @MaxLength(8, {
    message: 'Blood pressure should follow format like 120-mmHg',
  })
  @Matches(/^\d{2,3}-mmHg$/, {
    message: 'Blood pressure format should be like 120-mmHg',
  })
  @IsString({ message: 'Blood pressure should be a string' })
  @IsNotEmpty({ message: 'Blood pressure is required' })
  bloodPressure: string;

  @MaxLength(7, {
    message: 'Heart rate should follow format like 75-bpm',
  })
  @Matches(/^\d{2,3}-bpm$/, {
    message: 'Heart rate format should be like 75-bpm',
  })
  @IsString({ message: 'Heart rate should be a string' })
  @IsNotEmpty({ message: 'Heart rate is required' })
  heartRate: string;

  @IsUUID('4', { message: 'Invalid patient ID. Must be UUID v4' })
  @IsNotEmpty({ message: 'Patient ID is required' })
  patientId: string;

  @IsUUID('4', { message: 'Invalid nurse ID. Must be UUID v4' })
  @IsNotEmpty({ message: 'Nurse ID is required' })
  nurseId: string;

  @IsEnum(MonitoredTime, {
    message:
      'Monitored time should be one of morning, afternoon, evening, night',
  })
  @IsNotEmpty({ message: 'Monitored time is required' })
  monitoredTime: MonitoredTime;

  @IsOptional()
  @IsDateString({}, { message: 'Date must be in ISO format (YYYY-MM-DD)' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Date must be in YYYY-MM-DD format',
  })
  date?: string;
}
