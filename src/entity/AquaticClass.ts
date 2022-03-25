import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const AquaticClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const AquaticClassEntity = model<IAxieClass>('aquatic_class', AquaticClassSchema);
