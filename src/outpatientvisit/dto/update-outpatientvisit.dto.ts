import { PartialType } from '@nestjs/mapped-types';
import { CreateOutPatientVisitDto } from './create-outpatientvisit.dto';

export class UpdateOutpatientvisitDto extends PartialType(CreateOutPatientVisitDto) {}
