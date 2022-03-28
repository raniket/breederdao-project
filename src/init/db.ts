const mongoose = require('mongoose');
import {DB} from '../config/db';

export const initDb = async () => {
    try {
        await mongoose.connect(DB.CONNECTION_STRING);
        console.log('Connected to DB!')
    } catch (error) {
        console.log('DB Connection failure...', error)
    }
}