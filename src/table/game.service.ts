import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {
    findAll() {
        return 'Buscar todas os jogos';
    }
    
    create() {
        return 'Criar um novo jogo'
    }
}