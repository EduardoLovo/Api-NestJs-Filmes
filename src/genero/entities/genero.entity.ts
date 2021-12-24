import { Prisma } from "@prisma/client";

export class Genero implements Prisma.GeneroUncheckedCreateInput {
    id?: number;
    titulo: string;
}
