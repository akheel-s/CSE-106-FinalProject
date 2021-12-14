import { PartialType } from '@nestjs/swagger';
import { CreateUserdeckDto } from './create-userdeck.dto';

export class UpdateUserdeckDto extends PartialType(CreateUserdeckDto) {}
