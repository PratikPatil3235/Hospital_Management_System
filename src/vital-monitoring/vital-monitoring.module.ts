import { Module } from '@nestjs/common';
import { VitalMonitoringService } from './vital-monitoring.service';
import { VitalMonitoringController } from './vital-monitoring.controller';

@Module({
  controllers: [VitalMonitoringController],
  providers: [VitalMonitoringService],
})
export class VitalMonitoringModule {}
