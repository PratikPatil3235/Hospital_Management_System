import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { OutPatientVisitService } from './outpatientvisit.service';
import { CreateOutPatientVisitDto } from './dto/create-outpatientvisit.dto';
import { UpdateOutpatientvisitDto } from './dto/update-outpatientvisit.dto';

@Controller('outpatientvisit')
export class OutPatientVisitController {
  constructor(
    private readonly outpatientvisitService: OutPatientVisitService,
  ) {}

  @Post()
  async create(@Body() createOutpatientvisitDto: CreateOutPatientVisitDto) {
    const data = await this.outpatientvisitService.create(
      createOutpatientvisitDto,
    );
    return {
      status: HttpStatus.CREATED,
      message: 'Stored a visited patient in database...',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.outpatientvisitService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'All visited patients fetched from database...',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.outpatientvisitService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: `Visited patient with id ${id} fetched ...`,
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOutpatientvisitDto: UpdateOutpatientvisitDto,
  ) {
    const data = await this.outpatientvisitService.update(
      id,
      updateOutpatientvisitDto,
    );
    return {
      status: HttpStatus.OK,
      message: 'updated a visited patient in database...',
      data,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      status: HttpStatus.OK,
      message: `deleted a visited patient from database whose id is ${id}`,
    };
  }
}
