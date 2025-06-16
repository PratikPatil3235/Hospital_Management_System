import { Module } from '@nestjs/common';
import { OperationTheaterService } from './operation-theater.service';
import { OperationTheaterController } from './operation-theater.controller';

@Module({
  controllers: [OperationTheaterController],
  providers: [OperationTheaterService],
})
export class OperationTheaterModule {}
