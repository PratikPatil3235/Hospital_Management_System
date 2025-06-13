import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    const data = await this.appointmentService.create(createAppointmentDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Appointment has been ceated',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.appointmentService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'All Appointment has been fetched succesfully',
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.appointmentService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: `Your Appointment with id ${id} has been fetched`,
      data,
    };
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    const data = await this.appointmentService.update(id, updateAppointmentDto);
    return {
      status: HttpStatus.OK,
      message: `Your Appointment with id ${id} has been updated succesfully`,
      data,
    };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.appointmentService.remove(id);
  }
}
