import { Injectable } from '@nestjs/common';
import { CreateOperationTheaterDto } from './dto/create-operation-theater.dto';
import { UpdateOperationTheaterDto } from './dto/update-operation-theater.dto';

@Injectable()
export class OperationTheaterService {
  create(createOperationTheaterDto: CreateOperationTheaterDto) {
    return 'This action adds a new operationTheater';
  }

  findAll() {
    return `This action returns all operationTheater`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operationTheater`;
  }

  update(id: number, updateOperationTheaterDto: UpdateOperationTheaterDto) {
    return `This action updates a #${id} operationTheater`;
  }

  remove(id: number) {
    return `This action removes a #${id} operationTheater`;
  }
}
