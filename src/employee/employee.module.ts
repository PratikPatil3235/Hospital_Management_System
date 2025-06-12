import { Module } from '@nestjs/common';
import { EmployeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { HospitalServices } from 'src/Hospital/hospital.service';
import { HospitalModule } from 'src/Hospital/hospital.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]),HospitalModule],
  controllers: [EmployeeController],
  providers: [EmployeService],
})
export class EmployeeModule {}
