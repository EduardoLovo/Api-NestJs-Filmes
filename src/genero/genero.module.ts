import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';

@Module({
  controllers: [GeneroController],
  providers: [GeneroService, PrismaService]
})
export class GeneroModule { }
