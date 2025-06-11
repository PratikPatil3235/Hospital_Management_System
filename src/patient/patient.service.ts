import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    try {
      const patient = this.patientRepository.create({
        p_Address: createPatientDto.address,
        p_Age: createPatientDto.age,
        p_BloodGroup: createPatientDto.bloodGroup,
        p_Gender: createPatientDto.gender,
        p_Name: createPatientDto.name,
        p_Phone: createPatientDto.phone,
      });

      return this.patientRepository.save(patient);
    } catch (error) {
      throw new InternalServerErrorException(`Failed to create patient...`);
    }
  }

  async findAll(): Promise<Patient[]> {
    try {
      return this.patientRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(`Failed to fetch hospitals...`);
    }
  }

  async findOne(id: string) {
    const patient = await this.patientRepository.findOne({
      where: { p_id: id },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with id ${id} Not found`);
    }

    return patient;
  }

  async update(
    id: string,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    const paitent = await this.patientRepository.findOne({
      where: { p_id: id },
    });

    if (!paitent) {
      throw new NotFoundException(`Patient with id ${id} not found`);
    }

    paitent.p_Address = updatePatientDto.address ?? paitent.p_Address;
    paitent.p_Name = updatePatientDto.name ?? paitent.p_Name;
    paitent.p_Age = updatePatientDto.age ?? paitent.p_Age;
    paitent.p_BloodGroup = updatePatientDto.bloodGroup ?? paitent.p_BloodGroup;
    paitent.p_Gender = updatePatientDto.gender ?? paitent.p_Gender;
    paitent.p_Phone = updatePatientDto.phone ?? paitent.p_Phone;

    return this.patientRepository.save(paitent);
  }

  async remove(id: string): Promise<DeleteResult> {
    const data = await this.patientRepository.delete(id);
    if (data.affected === 0) {
      throw new NotFoundException(`Patient with id ${id} id Not found`);
    }
    return data;
  }
}
