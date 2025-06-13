import { PartialType } from '@nestjs/mapped-types';
import { CreateInPatientStayDto } from './create-inpatientstay.dto';

export class UpdateInpatientstayDto extends PartialType(CreateInPatientStayDto) {}
