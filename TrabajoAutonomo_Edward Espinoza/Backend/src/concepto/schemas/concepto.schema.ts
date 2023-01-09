import { Schema } from 'mongoose';

export const conceptoSchema = new Schema({
    producto: String,
    precio:  Number,
    description: String,
});
