import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: false })
  user_id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
