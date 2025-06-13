import { Injectable } from '@nestjs/common';
import { CreateInPatientStayDto } from './dto/create-inpatientstay.dto';
import { UpdateInpatientstayDto } from './dto/update-inpatientstay.dto';

@Injectable()
export class InPatientStayService {
  create(createInpatientstayDto: CreateInPatientStayDto) {
    return 'This action adds a new inpatientstay';
  }

  findAll() {
    return `This action returns all inpatientstay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inpatientstay`;
  }

  update(id: number, updateInpatientstayDto: UpdateInpatientstayDto) {
    return `This action updates a #${id} inpatientstay`;
  }

  remove(id: number) {
    return `This action removes a #${id} inpatientstay`;
  }
}
