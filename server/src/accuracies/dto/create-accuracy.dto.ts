import { ApiProperty } from '@nestjs/swagger';

export class CreateAccuracyDto {
  @ApiProperty({ required: false })
  accuracy_id: number;

  @ApiProperty()
  userdeck_id: number;

  @ApiProperty()
  accuracy: number;

  @ApiProperty({ required: false })
  timestamp: string; // TODO: should this be a string and is that why the POST request isn't going through?
}
