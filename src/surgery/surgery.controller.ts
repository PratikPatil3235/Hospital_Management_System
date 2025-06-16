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
import { SurgeryService } from './surgery.service';
import { CreateSurgeryDto } from './dto/create-surgery.dto';
import { UpdateSurgeryDto } from './dto/update-surgery.dto';

@Controller('surgery')
export class SurgeryController {
  constructor(private readonly surgeryService: SurgeryService) {}

  @Post()
  async create(@Body() createSurgeryDto: CreateSurgeryDto) {
    const data = await this.surgeryService.create(createSurgeryDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Surgery has been created',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.surgeryService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'All Surgeries has been Fetched succesfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.surgeryService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: `Surgery with id ${id} has been fetched `,
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSurgeryDto: UpdateSurgeryDto,
  ) {
    const data = await this.surgeryService.update(id, updateSurgeryDto);
    return {
      status: HttpStatus.OK,
      message: `Sugery details with id ${id} has been updated`,
      data,
    };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.surgeryService.remove(id);
  }
}
