import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConfidenceDto } from './dto/create-confidence.dto';
import { UpdateConfidenceDto } from './dto/update-confidence.dto';

@Injectable()
export class ConfidencesService {
  constructor(private prisma: PrismaService) {}

  create(createConfidenceDto: CreateConfidenceDto) {
    return this.prisma.confidence.create({ data: createConfidenceDto });
  }

  findAll() {
    return this.prisma.confidence.findMany();
  }

  findOne(id: number) {
    return this.prisma.confidence.findUnique({ where: { confidence_id: id } });
  }

  update(id: number, updateConfidenceDto: UpdateConfidenceDto) {
    return `This action updates a #${id} confidence`; // TODO: should we be able to PUT accuracies?
  }

  remove(id: number) {
    return this.prisma.confidence.delete({ where: { confidence_id: id } });
  }
}
