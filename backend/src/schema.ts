
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CityDocument = HydratedDocument<City>;

@Schema()
export class City {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  data: string;
}

export const CitySchema = SchemaFactory.createForClass(City);

export type ResidentDocument = HydratedDocument<Resident>;

interface IGroup {
  type: string
  name: string
}

@Schema()
export class Resident {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  city_id: number;

  @Prop()
  groups: IGroup[]
}

export const ResidentSchema = SchemaFactory.createForClass(Resident);
