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
import { UserflashcardsService } from './userflashcards.service';
import { CreateUserflashcardDto } from './dto/create-userflashcard.dto';
import { UpdateUserflashcardDto } from './dto/update-userflashcard.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('userflashcards')
@ApiTags('userflashcards')
export class UserflashcardsController {
  constructor(private readonly userflashcardsService: UserflashcardsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createUserflashcardDto: CreateUserflashcardDto) {
    return this.userflashcardsService.create(createUserflashcardDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userflashcardsService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.userflashcardsService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateUserflashcardDto: UpdateUserflashcardDto,
  ) {
    return this.userflashcardsService.update(+id, updateUserflashcardDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.userflashcardsService.remove(+id);
  }
}
