import { Injectable } from '@nestjs/common';
import { CreateAnestesiaRecordDto } from './dto/create-anestesia-record.dto';
import { UpdateAnestesiaRecordDto } from './dto/update-anestesia-record.dto';

@Injectable()
export class AnestesiaRecordService {
  create(createAnestesiaRecordDto: CreateAnestesiaRecordDto) {
    return 'This action adds a new anestesiaRecord';
  }

  findAll() {
    return `This action returns all anestesiaRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anestesiaRecord`;
  }

  update(id: number, updateAnestesiaRecordDto: UpdateAnestesiaRecordDto) {
    return `This action updates a #${id} anestesiaRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} anestesiaRecord`;
  }
}
