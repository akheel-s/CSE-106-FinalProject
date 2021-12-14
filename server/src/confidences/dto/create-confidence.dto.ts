import { ApiProperty } from '@nestjs/swagger';

export class CreateConfidenceDto {
  @ApiProperty({ required: false })
  confidence_id: number;

  @ApiProperty()
  userflashcard_id: number;

  @ApiProperty()
  confidence: number;

  @ApiProperty({ required: false })
  timestamp: string; // TODO: should this be a string and is that why the POST request isn't going through?
}
