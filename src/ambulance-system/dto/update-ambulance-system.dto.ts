import { PartialType } from '@nestjs/mapped-types';
import { CreateAmbulanceSystemDto } from './create-ambulance-system.dto';

export class UpdateAmbulanceSystemDto extends PartialType(CreateAmbulanceSystemDto) {}
