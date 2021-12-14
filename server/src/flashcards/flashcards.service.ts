import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';

@Injectable()
export class FlashcardsService {
  constructor(private prisma: PrismaService) {}

  create(createFlashcardDto: CreateFlashcardDto) {
    return this.prisma.flashcard.create({ data: createFlashcardDto });
  }

  findAll() {
    return this.prisma.flashcard.findMany();
  }

  findOne(id: number) {
    return this.prisma.flashcard.findUnique({ where: { flashcard_id: id } });
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return this.prisma.flashcard.update({
      data: updateFlashcardDto,
      where: { flashcard_id: id },
    });
  }

  remove(id: number) {
    return this.prisma.flashcard.delete({ where: { flashcard_id: id } });
  }
}
