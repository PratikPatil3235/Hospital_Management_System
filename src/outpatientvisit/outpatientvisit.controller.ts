import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutPatientVisitService } from './outpatientvisit.service';
import { CreateOutPatientVisitDto } from './dto/create-outpatientvisit.dto';
import { UpdateOutpatientvisitDto } from './dto/update-outpatientvisit.dto';

@Controller('outpatientvisit')
export class OutPatientVisitController {
  constructor(private readonly outpatientvisitService: OutPatientVisitService) {}

  @Post()
  create(@Body() createOutpatientvisitDto: CreateOutPatientVisitDto) {
    return this.outpatientvisitService.create(createOutpatientvisitDto);
  }

  @Get()
  findAll() {
    return this.outpatientvisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outpatientvisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutpatientvisitDto: UpdateOutpatientvisitDto) {
    return this.outpatientvisitService.update(+id, updateOutpatientvisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outpatientvisitService.remove(+id);
  }
}
