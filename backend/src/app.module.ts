import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import {City, CitySchema, Resident, ResidentSchema} from "./schema";
import {CitiesService} from "./cities-service";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
      MongooseModule.forFeature([{ name: Resident.name, schema: ResidentSchema }]),
      MongooseModule.forRoot('mongodb://db/cities')
  ],
  controllers: [AppController],
  providers: [AppService, CitiesService],
})
export class AppModule {}