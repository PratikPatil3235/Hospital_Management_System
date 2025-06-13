import { PartialType } from '@nestjs/mapped-types';
import { CreateVitalMonitoringDto } from './create-vital-monitoring.dto';

export class UpdateVitalMonitoringDto extends PartialType(CreateVitalMonitoringDto) {}
