import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalServices } from './hospital.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from './entity/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  controllers: [HospitalController],
  providers: [HospitalServices],
  exports: [],
})
export class HospitalModule {}
