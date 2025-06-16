import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnestesiaRecordService } from './anestesia-record.service';
import { CreateAnestesiaRecordDto } from './dto/create-anestesia-record.dto';
import { UpdateAnestesiaRecordDto } from './dto/update-anestesia-record.dto';

@Controller('anestesia-record')
export class AnestesiaRecordController {
  constructor(private readonly anestesiaRecordService: AnestesiaRecordService) {}

  @Post()
  create(@Body() createAnestesiaRecordDto: CreateAnestesiaRecordDto) {
    return this.anestesiaRecordService.create(createAnestesiaRecordDto);
  }

  @Get()
  findAll() {
    return this.anestesiaRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anestesiaRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnestesiaRecordDto: UpdateAnestesiaRecordDto) {
    return this.anestesiaRecordService.update(+id, updateAnestesiaRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anestesiaRecordService.remove(+id);
  }
}
