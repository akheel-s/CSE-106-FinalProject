import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccuracyDto } from './dto/create-accuracy.dto';
import { UpdateAccuracyDto } from './dto/update-accuracy.dto';

@Injectable()
export class AccuraciesService {
  constructor(private prisma: PrismaService) {}

  create(createAccuracyDto: CreateAccuracyDto) {
    return this.prisma.accuracy.create({ data: createAccuracyDto });
  }

  findAll() {
    return this.prisma.accuracy.findMany();
  }

  findOne(id: number) {
    return this.prisma.accuracy.findUnique({ where: { accuracy_id: id } });
  }

  update(id: number, updateAccuracyDto: UpdateAccuracyDto) {
    return `This action updates a #${id} accuracy`; // TODO: should we be able to PUT accuracies?
  }

  remove(id: number) {
    return this.prisma.accuracy.delete({ where: { accuracy_id: id } });
  }
}
