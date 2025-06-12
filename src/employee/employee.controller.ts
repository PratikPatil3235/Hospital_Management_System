import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EmployeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const data = this.employeService.create(createEmployeeDto);
    return {
      status: 201,
      message: 'Employee Created Succesfully ...',
      data,
    };
  }

  @Get()
  findAll() {
    const data = this.employeService.findAll();
    return {
      status: 200,
      message: 'Employees fetched Succesfully ...',
      data,
    };
  }

  @Get('/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = this.employeService.findOne(id);

    return {
      status: 200,
      message: ` Employee with id: ${id} fetched Succesfully ...`,
      data,
    };
  }

  @Patch('/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const data = this.employeService.update(id, updateEmployeeDto);
    return {
      status: 200,
      message: `Employee with id ${id} updated Succesfully ...`,
      data,
    };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeService.remove(id);
  }
}
