import { Prisma } from "@prisma/client";

export class Filme implements Prisma.FilmeUncheckedCreateInput {
    id?: number;
    nome: string;
    capa?: string;
    imagemView?: string;
}
