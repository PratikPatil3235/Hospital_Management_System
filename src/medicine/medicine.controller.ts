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
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Post()
  async create(@Body() createMedicineDto: CreateMedicineDto) {
    const data = await this.medicineService.create(createMedicineDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Medicine created Succesfully',
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.medicineService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'All Medicines fetched Succesfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const data = await this.medicineService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Medicine Fetch Succesfully',
      data,
    };
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateMedicineDto: UpdateMedicineDto,
  ) {
    const data = await this.medicineService.update(id, updateMedicineDto);
    return {
      status: HttpStatus.OK,
      message: 'Medicine updated Succesfully',
      data,
    };
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.medicineService.remove(id);
  }
}
