import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FilmeModule } from './filme/filme.module';
import { GeneroModule } from './genero/genero.module';

@Module({
  imports: [FilmeModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
