import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateInPatientStayDto } from './dto/create-inpatientstay.dto';
import { UpdateInpatientstayDto } from './dto/update-inpatientstay.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InPatientStay } from './entities/inpatientstay.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class InPatientStayService {
  constructor(
    @InjectRepository(InPatientStay)
    private readonly inpatientStayepository: Repository<InPatientStay>,
  ) {}

  async create(
    createInpatientstayDto: CreateInPatientStayDto,
  ): Promise<InPatientStay> {
    try {
      const inPatientStay = this.inpatientStayepository.create({
        patientId: createInpatientstayDto.patientId,
        doctorId: createInpatientstayDto.doctorId,
        admittedAt: createInpatientstayDto.admittedAt,
        notes: createInpatientstayDto.notes,
        dischargedAt: createInpatientstayDto.dischargedAt,
        nurseId: createInpatientstayDto.nurseId,
      });

      return await this.inpatientStayepository.save(inPatientStay);
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again later`,
      );
    }
  }

  findAll(): Promise<InPatientStay[]> {
    try {
      return this.inpatientStayepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again later...`,
      );
    }
  }

  async findOne(id: string): Promise<InPatientStay> {
    const inpatientstay = await this.inpatientStayepository.findOne({
      where: { id },
    });
    if (!inpatientstay) {
      throw new NotFoundException(`Cannot found a patient in our system`);
    }
    return inpatientstay;
  }

  async update(
    id: string,
    updateInpatientstayDto: UpdateInpatientstayDto,
  ): Promise<InPatientStay> {
    const inpatientstay = await this.inpatientStayepository.findOne({
      where: { id },
    });
    if (!inpatientstay) {
      throw new NotFoundException(`Cannot found a patient in our system`);
    }

    inpatientstay.admittedAt = updateInpatientstayDto.admittedAt
      ? new Date(updateInpatientstayDto.admittedAt)
      : inpatientstay.admittedAt;

    inpatientstay.dischargedAt = updateInpatientstayDto.dischargedAt
      ? new Date(updateInpatientstayDto.dischargedAt)
      : inpatientstay.dischargedAt;

    inpatientstay.doctorId =
      updateInpatientstayDto.doctorId ?? inpatientstay.doctorId;

    inpatientstay.notes = updateInpatientstayDto.notes ?? inpatientstay.notes;

    inpatientstay.nurseId =
      updateInpatientstayDto.nurseId ?? inpatientstay.nurseId;

    inpatientstay.patientId =
      updateInpatientstayDto.patientId ?? inpatientstay.patientId;

    return await this.inpatientStayepository.save(inpatientstay);
  }

  async remove(id: string): Promise<DeleteResult> {
    const result = await this.inpatientStayepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Patient with id not found`);
    }
    return result;
  }
}
