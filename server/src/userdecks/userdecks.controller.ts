import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserdecksService } from './userdecks.service';
import { CreateUserdeckDto } from './dto/create-userdeck.dto';
import { UpdateUserdeckDto } from './dto/update-userdeck.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('userdecks')
@Controller('userdecks')
@ApiTags('userdecks')
export class UserdecksController {
  constructor(private readonly userdecksService: UserdecksService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createUserdeckDto: CreateUserdeckDto) {
    return this.userdecksService.create(createUserdeckDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userdecksService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userdecksService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateUserdeckDto: UpdateUserdeckDto,
  ) {
    return this.userdecksService.update(+id, updateUserdeckDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.userdecksService.remove(+id);
  }
}
