import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const MechClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const MechClassEntity = model<IAxieClass>('mech_class', MechClassSchema);
