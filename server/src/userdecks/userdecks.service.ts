import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserdeckDto } from './dto/create-userdeck.dto';
import { UpdateUserdeckDto } from './dto/update-userdeck.dto';

@Injectable()
export class UserdecksService {
  constructor(private prisma: PrismaService) {}

  create(createUserdeckDto: CreateUserdeckDto) {
    return this.prisma.user_Deck.create({ data: createUserdeckDto });
  }

  findAll() {
    return this.prisma.user_Deck.findMany();
  }

  findOne(id: number) {
    return this.prisma.user_Deck.findUnique({ where: { userdeck_id: id } });
  }

  update(id: number, updateUserdeckDto: UpdateUserdeckDto) {
    return this.prisma.user_Deck.update({
      data: updateUserdeckDto,
      where: { userdeck_id: id },
    });
  }

  remove(id: number) {
    return this.prisma.user_Deck.delete({ where: { userdeck_id: id } });
  }
}
