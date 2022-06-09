import { Gender, Profile } from "@prisma/client";

export class Game {
    id?: string;
    title: string;
    coverImageUrl: string;
    description: string;
    Year: number;
    imdbScrore: number;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    genders?: Gender;
    profiles?: Profile;
}