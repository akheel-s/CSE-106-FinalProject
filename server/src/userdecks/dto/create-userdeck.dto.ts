import { ApiProperty } from '@nestjs/swagger';

export class CreateUserdeckDto {
  @ApiProperty({ required: false })
  userdeck_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  deck_id: number;
}
