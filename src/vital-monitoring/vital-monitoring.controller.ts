import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VitalMonitoringService } from './vital-monitoring.service';
import { CreateVitalMonitoringDto } from './dto/create-vital-monitoring.dto';
import { UpdateVitalMonitoringDto } from './dto/update-vital-monitoring.dto';

@Controller('vital-monitoring')
export class VitalMonitoringController {
  constructor(private readonly vitalMonitoringService: VitalMonitoringService) {}

  @Post()
  create(@Body() createVitalMonitoringDto: CreateVitalMonitoringDto) {
    return this.vitalMonitoringService.create(createVitalMonitoringDto);
  }

  @Get()
  findAll() {
    return this.vitalMonitoringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vitalMonitoringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVitalMonitoringDto: UpdateVitalMonitoringDto) {
    return this.vitalMonitoringService.update(+id, updateVitalMonitoringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vitalMonitoringService.remove(+id);
  }
}
