import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { InPatientStayService } from './inpatientstay.service';
import { CreateInPatientStayDto } from './dto/create-inpatientstay.dto';
import { UpdateInpatientstayDto } from './dto/update-inpatientstay.dto';

@Controller('inpatientstay')
export class InpatientstayController {
  constructor(private readonly inpatientstayService: InPatientStayService) {}

  @Post()
  async create(@Body() createInpatientstayDto: CreateInPatientStayDto) {
    const data = await this.inpatientstayService.create(createInpatientstayDto);
    return {
      status: HttpStatus.CREATED,
      message: 'In Patient stay is created succesfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.inpatientstayService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'fetch all In Patient stay succesfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.inpatientstayService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'fetch a Patient which admitted and stayed succesfully',
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInpatientstayDto: UpdateInpatientstayDto,
  ) {
    const data = await this.inpatientstayService.update(
      id,
      updateInpatientstayDto,
    );
    return {
      status: HttpStatus.OK,
      message: 'updated inPatient succesfully',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.inpatientstayService.remove(id);
  }
}
