import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OperationTheaterService } from './operation-theater.service';
import { CreateOperationTheaterDto } from './dto/create-operation-theater.dto';
import { UpdateOperationTheaterDto } from './dto/update-operation-theater.dto';

@Controller('operation-theater')
export class OperationTheaterController {
  constructor(private readonly operationTheaterService: OperationTheaterService) {}

  @Post()
  create(@Body() createOperationTheaterDto: CreateOperationTheaterDto) {
    return this.operationTheaterService.create(createOperationTheaterDto);
  }

  @Get()
  findAll() {
    return this.operationTheaterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationTheaterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOperationTheaterDto: UpdateOperationTheaterDto) {
    return this.operationTheaterService.update(+id, updateOperationTheaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationTheaterService.remove(+id);
  }
}
