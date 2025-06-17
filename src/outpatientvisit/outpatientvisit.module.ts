import { Module } from '@nestjs/common';
import { OutPatientVisitService } from './outpatientvisit.service';
import { OutPatientVisitController } from './outpatientvisit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutPatientVisit } from './entities/outpatientvisit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutPatientVisit])],
  controllers: [OutPatientVisitController],
  providers: [OutPatientVisitService],
})
export class OutpatientvisitModule {}
