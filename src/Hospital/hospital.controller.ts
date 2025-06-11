import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HospitalServices } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospital')
@UsePipes(new ValidationPipe())
export class HospitalController {
  constructor(private readonly hospitalService: HospitalServices) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createHospitalDto: CreateHospitalDto) {
    let data = await this.hospitalService.create(createHospitalDto);
    return {
      status: 201,
      message: 'Hospital Has been Created...',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.hospitalService.findAll();
    return {
      status: 200,
      message: 'List Of Hospitals...',
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.hospitalService.findOne(id);
    return {
      status: 200,
      message: 'List Of Hospitals...',
      data,
    };
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateHospitalDto: UpdateHospitalDto,
  ) {
    const data = await this.hospitalService.update(id, updateHospitalDto);
    return {
      status: 200,
      message: 'List Of Hospitals...',
      data,
    };
  }

  @Delete('/:id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.hospitalService.remove(id);
  }
}
