import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GenderModule } from './gender/gender.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [GameModule, PrismaModule, UsersModule, ProfilesModule, GenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
