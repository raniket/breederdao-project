import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const BeastClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const BeastClassEntity = model<IAxieClass>('beast_class', BeastClassSchema);
