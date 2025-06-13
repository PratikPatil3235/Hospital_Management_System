import { Injectable } from '@nestjs/common';
import { CreateAmbulanceSystemDto } from './dto/create-ambulance-system.dto';
import { UpdateAmbulanceSystemDto } from './dto/update-ambulance-system.dto';

@Injectable()
export class AmbulanceSystemService {
  create(createAmbulanceSystemDto: CreateAmbulanceSystemDto) {
    return 'This action adds a new ambulanceSystem';
  }

  findAll() {
    return `This action returns all ambulanceSystem`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ambulanceSystem`;
  }

  update(id: string, updateAmbulanceSystemDto: UpdateAmbulanceSystemDto) {
    return `This action updates a #${id} ambulanceSystem`;
  }

  remove(id: string) {
    return `This action removes a #${id} ambulanceSystem`;
  }
}
