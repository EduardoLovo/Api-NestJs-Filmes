import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private readonly prisma: PrismaService) { }

  private readonly _include = {
    filmes: {
      select: {
        nome: true
      }
    }
  }

  create(data: CreateGeneroDto) {
    return this.prisma.genero.create({
      data,
      include: this._include
    });
  }

  findAll() {
    return this.prisma.genero.findMany({
      include: this._include
    });
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({
      where: { id },
      include: this._include
    });
  }

  update(id: number, data: UpdateGeneroDto) {
    return this.prisma.genero.update({
      where: { id },
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.genero.delete({
      where: { id },
      include: this._include
    });
  }
}
