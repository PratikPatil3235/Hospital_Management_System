import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './entity/hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class HospitalServices {
  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalRepository: Repository<Hospital>,
  ) {}

  async create(createHospitalDto: CreateHospitalDto): Promise<Hospital> {
    try {
      const hospital = new Hospital();

      hospital.h_Name = createHospitalDto.name;
      hospital.h_Address = createHospitalDto.address;
      hospital.h_Email = createHospitalDto.email;
      hospital.h_Phone = createHospitalDto.phone;
      hospital.h_Specialization = createHospitalDto.specialization;

      return this.hospitalRepository.save(hospital);
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to Add a Hospital Please try again after few minutes...`,
      );
    }
  }

  async findAll(): Promise<Hospital[]> {
    try {
      return this.hospitalRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(`Failed To fetch All Hospitals`);
    }
  }

  async findOne(id: string): Promise<Hospital> {
    const hospital = await this.hospitalRepository.findOne({
      where: { h_Registration_No: id },
    });
    if (!hospital) {
      throw new NotFoundException(`Hospital With id ${id} not found`);
    }
    return hospital;
  }

  async update(
    id: string,
    updateHospitalDto: UpdateHospitalDto,
  ): Promise<Hospital> {
    const hospital = await this.hospitalRepository.findOne({
      where: { h_Registration_No: id },
    });

    if (!hospital) {
      throw new NotFoundException(`Hospital With id ${id} not found`);
    }

    hospital.h_Address = updateHospitalDto.address ?? hospital.h_Address;
    hospital.h_Email = updateHospitalDto.email ?? hospital.h_Email;
    hospital.h_Name = updateHospitalDto.name ?? hospital.h_Name;
    hospital.h_Phone = updateHospitalDto.phone ?? hospital.h_Phone;
    hospital.h_Specialization =
      updateHospitalDto.specialization ?? hospital.h_Specialization;

    return this.hospitalRepository.save(hospital);
  }

  async remove(id: string): Promise<DeleteResult> {
    const hospital = await this.hospitalRepository.delete(id);
    console.log(typeof hospital.affected);
    if (hospital.affected === 0) {
      throw new NotFoundException(`Hospital with id ${id} not found`);
    }
    return hospital;
  }
}
