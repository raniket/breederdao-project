import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const PlantClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const PlantClassEntity = model<IAxieClass>('plant_class', PlantClassSchema);
