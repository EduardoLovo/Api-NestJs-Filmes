import { Filme } from "../entities/filme.entity";

export class CreateFilmeDto extends Filme {
    nome: string;
    capa?: string;
    imagemView?: string;
}
