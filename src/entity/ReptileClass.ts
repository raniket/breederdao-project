import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const ReptileClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const ReptileClassEntity = model<IAxieClass>('reptile_class', ReptileClassSchema);
