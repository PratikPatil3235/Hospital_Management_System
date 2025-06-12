import { Module } from '@nestjs/common';
import { EmployeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeService],
})
export class EmployeeModule {}
