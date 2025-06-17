import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOutPatientVisitDto } from './dto/create-outpatientvisit.dto';
import { UpdateOutpatientvisitDto } from './dto/update-outpatientvisit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OutPatientVisit } from './entities/outpatientvisit.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class OutPatientVisitService {
  constructor(
    @InjectRepository(OutPatientVisit)
    private readonly outpatientVisitRepository: Repository<OutPatientVisit>,
  ) {}

  async create(
    createOutpatientvisitDto: CreateOutPatientVisitDto,
  ): Promise<OutPatientVisit> {
    try {
      const visitedPatient = this.outpatientVisitRepository.create({
        patientId: createOutpatientvisitDto.patientId,
        doctorId: createOutpatientvisitDto.doctorId,
        visitedDate: createOutpatientvisitDto.visitedDate,
      });
      return await this.outpatientVisitRepository.save(visitedPatient);
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again later...`,
      );
    }
  }

  async findAll(): Promise<OutPatientVisit[]> {
    try {
      return await this.outpatientVisitRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again later...`,
      );
    }
  }

  async findOne(id: string) {
    const outPatient = await this.outpatientVisitRepository.findOne({
      where: { id },
    });
    if (!outPatient) {
      throw new NotFoundException(
        `Patient visited from outside with id ${id} not found...`,
      );
    }

    return outPatient;
  }

  async update(
    id: string,
    updateOutpatientvisitDto: UpdateOutpatientvisitDto,
  ): Promise<OutPatientVisit> {
    const outPatient = await this.outpatientVisitRepository.findOne({
      where: { id },
    });
    if (!outPatient) {
      throw new NotFoundException(
        `Patient visited from outside with id ${id} not found...`,
      );
    }
    outPatient.doctorId =
      updateOutpatientvisitDto.doctorId ?? outPatient.doctorId;
    outPatient.visitedDate = updateOutpatientvisitDto.visitedDate
      ? new Date(updateOutpatientvisitDto.visitedDate)
      : outPatient.visitedDate;
    outPatient.patientId =
      updateOutpatientvisitDto.patientId ?? outPatient.patientId;

    return await this.outpatientVisitRepository.save(outPatient);
  }

  async remove(id: string): Promise<DeleteResult> {
    const result = await this.outpatientVisitRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Patient visited from outside with id ${id} not found...`,
      );
    }
    return result;
  }
}
