import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserflashcardDto } from './dto/create-userflashcard.dto';
import { UpdateUserflashcardDto } from './dto/update-userflashcard.dto';

@Injectable()
export class UserflashcardsService {
  constructor(private prisma: PrismaService) {}

  create(createUserflashcardDto: CreateUserflashcardDto) {
    return this.prisma.user_Flashcard.create({ data: createUserflashcardDto });
  }

  findAll() {
    return this.prisma.user_Flashcard.findMany();
  }

  findOne(id: number) {
    return this.prisma.user_Flashcard.findUnique({
      where: { userflashcard_id: id },
    });
  }

  update(id: number, updateUserflashcardDto: UpdateUserflashcardDto) {
    return this.prisma.user_Flashcard.update({
      data: updateUserflashcardDto,
      where: { userflashcard_id: id },
    });
  }

  remove(id: number) {
    return this.prisma.user_Flashcard.delete({
      where: { userflashcard_id: id },
    });
  }
}
