import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { GenderModule } from './gender/gender.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { HomepageModule } from './homepage/homepage.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GameModule,
    PrismaModule,
    GenderModule,
    ProfileModule,
    UserModule,
    HomepageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
