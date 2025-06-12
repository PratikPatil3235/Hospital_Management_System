import { HospitalServices } from './../Hospital/hospital.service';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly hospitalServices: HospitalServices,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const hospital = await this.hospitalServices.findOne(createEmployeeDto.hId);

    const employee = this.employeeRepository.create({
      e_Name: createEmployeeDto.name,
      e_Phone: createEmployeeDto.phone,
      e_Email: createEmployeeDto.email,
      e_Role: createEmployeeDto.role,
      hospital: { h_Registration_No: hospital.h_Registration_No },
    });

    if (
      createEmployeeDto.specialization !== undefined &&
      createEmployeeDto.role === 'doctor'
    ) {
      employee.e_Specialization = createEmployeeDto.specialization;
    }

    if (
      createEmployeeDto.isAvaliable !== undefined &&
      createEmployeeDto.role === 'nurse'
    ) {
      employee.isAvaliable = createEmployeeDto.isAvaliable;
    }

    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed To fetch employee detailes, please try again after few minutes...`,
      );
    }
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { e_Id: id },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { e_Id: id },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    employee.e_Email = updateEmployeeDto.email ?? employee.e_Email;
    employee.e_Name = updateEmployeeDto.name ?? employee.e_Name;
    employee.e_Phone = updateEmployeeDto.phone ?? employee.e_Phone;
    employee.e_Role = updateEmployeeDto.role ?? employee.e_Role;

    employee.hospital.h_Registration_No =
      updateEmployeeDto.hId ?? employee.hospital.h_Registration_No;

    if (
      updateEmployeeDto.specialization !== undefined &&
      updateEmployeeDto.role === 'doctor'
    ) {
      employee.e_Specialization =
        updateEmployeeDto.specialization ?? employee.e_Specialization;
    }

    if (
      updateEmployeeDto.isAvaliable !== undefined &&
      updateEmployeeDto.role === 'nurse'
    ) {
      employee.isAvaliable =
        updateEmployeeDto.isAvaliable ?? employee.isAvaliable;
    }

    return await this.employeeRepository.save(employee);
  }

  async remove(id: string): Promise<DeleteResult> {
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return result;
  }
}
