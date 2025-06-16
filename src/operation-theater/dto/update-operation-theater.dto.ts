import { PartialType } from '@nestjs/mapped-types';
import { CreateOperationTheaterDto } from './create-operation-theater.dto';

export class UpdateOperationTheaterDto extends PartialType(CreateOperationTheaterDto) {}
