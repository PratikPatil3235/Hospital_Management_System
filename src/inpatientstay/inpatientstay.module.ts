import { Module } from '@nestjs/common';
import {  InPatientStayService} from './inpatientstay.service';
import { InpatientstayController } from './inpatientstay.controller';

@Module({
  controllers: [],
  providers: [InPatientStayService],
})
export class InPatientStayModule {}
