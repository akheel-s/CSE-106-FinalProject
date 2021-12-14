import { PartialType } from '@nestjs/swagger';
import { CreateConfidenceDto } from './create-confidence.dto';

export class UpdateConfidenceDto extends PartialType(CreateConfidenceDto) {}
