import { ApiProperty } from '@nestjs/swagger';

export class CreateDeckDto {
  @ApiProperty({ required: false })
  deck_id: number;

  @ApiProperty()
  deck_name: string;

  @ApiProperty()
  author_id: number;

  @ApiProperty()
  timestamp: string; // TODO: should this be a string and is that why the POST request isn't going through?
}
