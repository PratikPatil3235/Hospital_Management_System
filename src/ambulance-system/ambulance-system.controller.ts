import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmbulanceSystemService } from './ambulance-system.service';
import { CreateAmbulanceSystemDto } from './dto/create-ambulance-system.dto';
import { UpdateAmbulanceSystemDto } from './dto/update-ambulance-system.dto';

@Controller('ambulance-system')
export class AmbulanceSystemController {
  constructor(private readonly ambulanceSystemService: AmbulanceSystemService) {}

  @Post()
  create(@Body() createAmbulanceSystemDto: CreateAmbulanceSystemDto) {
    return this.ambulanceSystemService.create(createAmbulanceSystemDto);
  }

  @Get()
  findAll() {
    return this.ambulanceSystemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ambulanceSystemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmbulanceSystemDto: UpdateAmbulanceSystemDto) {
    return this.ambulanceSystemService.update(id, updateAmbulanceSystemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ambulanceSystemService.remove(id);
  }
}
