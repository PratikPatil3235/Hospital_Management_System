import { PartialType } from '@nestjs/mapped-types';
import { CreateAnestesiaRecordDto } from './create-anestesia-record.dto';

export class UpdateAnestesiaRecordDto extends PartialType(CreateAnestesiaRecordDto) {}
