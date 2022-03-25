import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const DuskClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const DuskClassEntity = model<IAxieClass>('dusk_class', DuskClassSchema);
