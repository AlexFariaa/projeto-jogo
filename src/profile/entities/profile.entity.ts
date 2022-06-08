import { Game, User } from "@prisma/client";

export class Profile {
    id?: string;
    title: string;
    imageUrl: string;
    user?: User;
    games?: Game;
}

