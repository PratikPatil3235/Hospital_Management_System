import { Module } from '@nestjs/common';
import { OutPatientVisitService } from './outpatientvisit.service';
import { OutPatientVisitController } from './outpatientvisit.controller';

@Module({
  controllers: [OutPatientVisitController],
  providers: [OutPatientVisitService],
})
export class OutpatientvisitModule {}
