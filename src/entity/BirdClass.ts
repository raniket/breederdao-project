import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const BirdClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const BirdClassEntity = model<IAxieClass>('bird_class', BirdClassSchema);
