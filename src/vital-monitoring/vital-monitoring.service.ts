import { Injectable } from '@nestjs/common';
import { CreateVitalMonitoringDto } from './dto/create-vital-monitoring.dto';
import { UpdateVitalMonitoringDto } from './dto/update-vital-monitoring.dto';

@Injectable()
export class VitalMonitoringService {
  create(createVitalMonitoringDto: CreateVitalMonitoringDto) {
    return 'This action adds a new vitalMonitoring';
  }

  findAll() {
    return `This action returns all vitalMonitoring`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vitalMonitoring`;
  }

  update(id: number, updateVitalMonitoringDto: UpdateVitalMonitoringDto) {
    return `This action updates a #${id} vitalMonitoring`;
  }

  remove(id: number) {
    return `This action removes a #${id} vitalMonitoring`;
  }
}
