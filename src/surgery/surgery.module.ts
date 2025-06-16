import { Module } from '@nestjs/common';
import { SurgeryService } from './surgery.service';
import { SurgeryController } from './surgery.controller';

@Module({
  controllers: [SurgeryController],
  providers: [SurgeryService],
})
export class SurgeryModule {}
