import { PartialType } from '@nestjs/swagger';
import { CreateAccuracyDto } from './create-accuracy.dto';

export class UpdateAccuracyDto extends PartialType(CreateAccuracyDto) {}
