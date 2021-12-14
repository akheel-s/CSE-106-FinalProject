import { ApiProperty } from '@nestjs/swagger';

export class CreateFlashcardDto {
  @ApiProperty({ required: false })
  flashcard_id: number;

  @ApiProperty()
  front: string;

  @ApiProperty()
  back: string;

  @ApiProperty()
  deck_id: number;
}
