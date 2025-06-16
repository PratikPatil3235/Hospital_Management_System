import { Module } from '@nestjs/common';
import { InPatientStayService } from './inpatientstay.service';
import { InpatientstayController } from './inpatientstay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InPatientStay } from './entities/inpatientstay.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InPatientStay])],
  controllers: [InpatientstayController],
  providers: [InPatientStayService],
})
export class InPatientStayModule {}
