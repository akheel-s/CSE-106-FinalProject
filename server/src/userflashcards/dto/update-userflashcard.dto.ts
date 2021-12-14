import { PartialType } from '@nestjs/swagger';
import { CreateUserflashcardDto } from './create-userflashcard.dto';

export class UpdateUserflashcardDto extends PartialType(CreateUserflashcardDto) {}
