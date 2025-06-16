import { Module } from '@nestjs/common';
import { AnestesiaRecordService } from './anestesia-record.service';
import { AnestesiaRecordController } from './anestesia-record.controller';

@Module({
  controllers: [AnestesiaRecordController],
  providers: [AnestesiaRecordService],
})
export class AnestesiaRecordModule {}
