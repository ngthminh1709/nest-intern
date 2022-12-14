import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
