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
import { AccuraciesService } from './accuracies.service';
import { CreateAccuracyDto } from './dto/create-accuracy.dto';
import { UpdateAccuracyDto } from './dto/update-accuracy.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('accuracies')
@ApiTags('accuracies')
export class AccuraciesController {
  constructor(private readonly accuraciesService: AccuraciesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAccuracyDto: CreateAccuracyDto) {
    return this.accuraciesService.create(createAccuracyDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.accuraciesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.accuraciesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateAccuracyDto: UpdateAccuracyDto,
  ) {
    return this.accuraciesService.update(+id, updateAccuracyDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.accuraciesService.remove(+id);
  }
}
