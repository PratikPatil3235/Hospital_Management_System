import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpStatus,
} from '@nestjs/common';
import { EmployeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const data = await this.employeService.create(createEmployeeDto);
    return {
      status: 201,
      message: 'Employee Created Succesfully ...',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.employeService.findAll();
    return {
      status: 200,
      message: 'Employees fetched Succesfully ...',
      data,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.employeService.findOne(id);

    return {
      status: 200,
      message: ` Employee with id: ${id} fetched Succesfully ...`,
      data,
    };
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const data = await this.employeService.update(id, updateEmployeeDto);
    return {
      status: HttpStatus.OK,
      message: `Employee with id ${id} updated Succesfully ...`,
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.employeService.remove(id);
  }
}
