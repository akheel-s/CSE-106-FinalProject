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
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConfidencesService } from './confidences.service';
import { CreateConfidenceDto } from './dto/create-confidence.dto';
import { UpdateConfidenceDto } from './dto/update-confidence.dto';

@Controller('confidences')
@ApiTags('confidences')
export class ConfidencesController {
  constructor(private readonly confidencesService: ConfidencesService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(@Body() createConfidenceDto: CreateConfidenceDto) {
    return this.confidencesService.create(createConfidenceDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.confidencesService.findAll();
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.confidencesService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateConfidenceDto: UpdateConfidenceDto,
  ) {
    return this.confidencesService.update(+id, updateConfidenceDto);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.confidencesService.remove(+id);
  }
}
