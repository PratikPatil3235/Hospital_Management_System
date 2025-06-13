import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InPatientStayService } from './inpatientstay.service';
import { CreateInPatientStayDto } from './dto/create-inpatientstay.dto';
import { UpdateInpatientstayDto } from './dto/update-inpatientstay.dto';

@Controller('inpatientstay')
export class InpatientstayController {
  constructor(private readonly inpatientstayService: InPatientStayService) {}

  @Post()
  create(@Body() createInpatientstayDto: CreateInPatientStayDto) {
    return this.inpatientstayService.create(createInpatientstayDto);
  }

  @Get()
  findAll() {
    return this.inpatientstayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inpatientstayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInpatientstayDto: UpdateInpatientstayDto) {
    return this.inpatientstayService.update(+id, updateInpatientstayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inpatientstayService.remove(+id);
  }
}
