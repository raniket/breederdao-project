import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const DawnClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const DawnClassEntity = model<IAxieClass>('dawn_class', DawnClassSchema);
