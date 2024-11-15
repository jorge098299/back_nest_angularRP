import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AuthNestController } from './g/modules/auth-nest/auth-nest.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule],
  controllers: [AppController, AuthNestController],
  providers: [AppService],
})
export class AppModule {}
