import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSurgeryDto } from './dto/create-surgery.dto';
import { UpdateSurgeryDto } from './dto/update-surgery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Surgery } from './entities/surgery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurgeryService {
  constructor(
    @InjectRepository(Surgery)
    private readonly sugeryRepositoy: Repository<Surgery>,
  ) {}

  async create(createSurgeryDto: CreateSurgeryDto): Promise<Surgery> {
    try {
      const surgery = this.sugeryRepositoy.create({
        surgeryName: createSurgeryDto.surgeryName,
        surgeryDate: createSurgeryDto.surgeryName,
        attendedBy: createSurgeryDto.attentedBy,
        patientId: createSurgeryDto.patientId,
        price: createSurgeryDto.price,
      });

      return this.sugeryRepositoy.save(surgery);
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again leter...`,
      );
    }
  }

  async findAll(): Promise<Surgery[]> {
    try {
      return await this.sugeryRepositoy.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `There is some issue please try again leter...`,
      );
    }
  }

  async findOne(id: string): Promise<Surgery> {
    const surgery = await this.sugeryRepositoy.findOne({ where: { id } });
    if (!surgery) {
      throw new NotFoundException(`Surgery with id ${id} Not found`);
    }
    return surgery;
  }

  async update(id: string, updateSurgeryDto: UpdateSurgeryDto) {
    const surgery = await this.sugeryRepositoy.findOne({ where: { id } });
    if (!surgery) {
      throw new NotFoundException(`Surgery with id ${id} Not found`);
    }
    surgery.attendedBy = updateSurgeryDto.attentedBy ?? surgery.attendedBy;
    surgery.patientId = updateSurgeryDto.patientId ?? surgery.patientId;
    surgery.price = updateSurgeryDto.price ?? surgery.price;
    surgery.surgeryDate = updateSurgeryDto.surgeryDate
      ? new Date(updateSurgeryDto.surgeryDate)
      : surgery.surgeryDate;
    surgery.surgeryName = updateSurgeryDto.surgeryName ?? surgery.surgeryName;

    return this.sugeryRepositoy.save(surgery);
  }

  async remove(id: string) {
    const result = await this.sugeryRepositoy.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Surgery with id ${id} Not found`);
    }
    return result;
  }
}
