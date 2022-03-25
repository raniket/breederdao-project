const mongoose = require('mongoose');
import {DB} from '../config/db';

export const initDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB.USER}:${DB.PASSWORD}@${DB.HOST}/${DB.NAME}?retryWrites=true&w=majority`);
        console.log('Connected to DB!')
    } catch (error) {
        console.log('DB Connection failure...', error)
    }
}