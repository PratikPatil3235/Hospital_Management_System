import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
  @UsePipes(new ValidationPipe({whitelist:true ,forbidNonWhitelisted:true}))
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    const data = await this.patientService.create(createPatientDto);
    return {
      status: 201,
      message: 'Patient Created Succesfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.patientService.findAll();
    return {
      status: 200,
      message: 'All Patient fetched succesfully',
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.patientService.findOne(id);
    return {
      status: 200,
      message: 'Patient fetched succesfully...',
      data,
    };
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    const data = await this.patientService.update(id, updatePatientDto);
    return {
      status: 200,
      message: 'Patient updated succesfully...',
      data,
    };
  }

  @Delete('/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.patientService.remove(id);
  }
}
