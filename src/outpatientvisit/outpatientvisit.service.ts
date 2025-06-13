import { Injectable } from '@nestjs/common';
import { CreateOutPatientVisitDto } from './dto/create-outpatientvisit.dto';
import { UpdateOutpatientvisitDto } from './dto/update-outpatientvisit.dto';

@Injectable()
export class OutPatientVisitService {
  create(createOutpatientvisitDto: CreateOutPatientVisitDto) {
    return 'This action adds a new outpatientvisit';
  }

  findAll() {
    return `This action returns all outpatientvisit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outpatientvisit`;
  }

  update(id: number, updateOutpatientvisitDto: UpdateOutpatientvisitDto) {
    return `This action updates a #${id} outpatientvisit`;
  }

  remove(id: number) {
    return `This action removes a #${id} outpatientvisit`;
  }
}
