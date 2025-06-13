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

  findOne(id: number) {
    return `This action returns a #${id} ambulanceSystem`;
  }

  update(id: number, updateAmbulanceSystemDto: UpdateAmbulanceSystemDto) {
    return `This action updates a #${id} ambulanceSystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} ambulanceSystem`;
  }
}
