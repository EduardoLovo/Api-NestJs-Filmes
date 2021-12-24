import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private readonly prisma: PrismaService) { }

  private readonly _include = {
    generos: {
      select: {
        titulo: true
      }
    }
  };

  create(data: CreateFilmeDto) {
    return this.prisma.filme.create({
      data,
      include: this._include
    });
  }

  findAll() {
    return this.prisma.filme.findMany({
      include: this._include
    });
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
      include: this._include
    })
  }

  update(id: number, data: UpdateFilmeDto) {
    return this.prisma.filme.update({
      where: { id },
      data,
      include: this._include
    });
  }

  remove(id: number) {
    return this.prisma.filme.delete({
      where: { id },
      include: this._include
    });
  }
}
