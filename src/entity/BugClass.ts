import { Schema, model } from 'mongoose';
import { IAxieClass } from '../types/IAxieClass';

const BugClassSchema = new Schema<IAxieClass>({
    _id: String,
    name: String,
    stage: String,
    class: String,
    currentPriceUSD: String
});

export const BugClassEntity = model<IAxieClass>('bug_class', BugClassSchema);
