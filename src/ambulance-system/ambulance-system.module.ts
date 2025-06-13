import { Module } from '@nestjs/common';
import { AmbulanceSystemService } from './ambulance-system.service';
import { AmbulanceSystemController } from './ambulance-system.controller';

@Module({
  controllers: [AmbulanceSystemController],
  providers: [AmbulanceSystemService],
})
export class AmbulanceSystemModule {}
