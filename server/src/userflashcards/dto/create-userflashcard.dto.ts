import { ApiProperty } from '@nestjs/swagger';

export class CreateUserflashcardDto {
  @ApiProperty({ required: false })
  userflashcard_id: number;
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  flashcard_id: number;
}
