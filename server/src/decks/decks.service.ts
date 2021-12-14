import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DecksService {
  constructor(private prisma: PrismaService) {}

  create(createDeckDto: CreateDeckDto) {
    return this.prisma.deck.create({ data: createDeckDto });
  }

  findAll() {
    return this.prisma.deck.findMany();
  }

  findOne(id: number) {
    return this.prisma.deck.findUnique({ where: { deck_id: id } });
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return this.prisma.deck.update({
      data: updateDeckDto,
      where: { deck_id: id },
    });
  }

  remove(id: number) {
    return this.prisma.deck.delete({ where: { deck_id: id } });
  }
}
