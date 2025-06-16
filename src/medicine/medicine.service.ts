import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from './entities/medicine.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepositoy: Repository<Medicine>,
  ) {}

  async create(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
    try {
      const medicine = this.medicineRepositoy.create({
        medicineName: createMedicineDto.medicineName,
        price: createMedicineDto.price,
        expireDate: createMedicineDto.expireDate,
      });

      return await this.medicineRepositoy.save(medicine);
    } catch (error) {
      throw new InternalServerErrorException(
        `These is some issue please try again later...`,
      );
    }
  }

  async findAll(): Promise<Medicine[]> {
    try {
      return await this.medicineRepositoy.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `These is some issue please try again later...`,
      );
    }
  }

  async findOne(id: string): Promise<Medicine> {
    const medicine = await this.medicineRepositoy.findOne({
      where: { m_Id: id },
    });

    if (!medicine) {
      throw new NotFoundException(`Medicine with id ${id} Not found`);
    }
    return medicine;
  }

  async update(
    id: string,
    updateMedicineDto: UpdateMedicineDto,
  ): Promise<Medicine> {
    const medicine = await this.medicineRepositoy.findOne({
      where: { m_Id: id },
    });

    if (!medicine) {
      throw new NotFoundException(`Medicine with id ${id} Not found`);
    }

    medicine.price = updateMedicineDto.price ?? medicine.price;
    medicine.expireDate = updateMedicineDto.expireDate
      ? new Date(updateMedicineDto.expireDate)
      : medicine.expireDate;
    medicine.medicineName =
      updateMedicineDto.medicineName ?? medicine.medicineName;

    return this.medicineRepositoy.save(medicine);
  }

  async remove(id: string): Promise<DeleteResult> {
    const result = await this.medicineRepositoy.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Medicine with id ${id} Not found`);
    }
    return result;
  }
}
