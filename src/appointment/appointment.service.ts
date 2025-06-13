import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) {}
  async create(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    try {
      const appointment = new Appointment();
      appointment.patientId = createAppointmentDto.patientId;
      appointment.doctorId = createAppointmentDto.doctorId;
      appointment.slot = createAppointmentDto.slot;
      
      if (createAppointmentDto.scheduledAt) {
        appointment.scheduledAt = new Date(createAppointmentDto.scheduledAt);
      }

      return await this.appointmentRepository.save(appointment);
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue , please try again later...`,
      );
    }
  }

  async findAll(): Promise<Appointment[]> {
    try {
      return this.appointmentRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue , please try again later...`,
      );
    }
  }

  async findOne(id: string) {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment with id ${id} Not Found`);
    }
    return appointment;
  }

  async update(
    id: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
    });
    if (!appointment) {
      throw new NotFoundException(`Appointment with id ${id} Not Found`);
    }
    appointment.doctorId =
      updateAppointmentDto.doctorId ?? appointment.doctorId;

    appointment.slot = updateAppointmentDto.slot ?? appointment.slot;

    appointment.scheduledAt =
      updateAppointmentDto.scheduledAt ?? appointment.scheduledAt;

    return this.appointmentRepository.save(appointment);
  }

  async remove(id: string): Promise<DeleteResult> {
    const data = await this.appointmentRepository.delete(id);
    if (data.affected === 0) {
      throw new NotFoundException(`Appointment with id ${id} Not found`);
    }
    return data;
  }
}
