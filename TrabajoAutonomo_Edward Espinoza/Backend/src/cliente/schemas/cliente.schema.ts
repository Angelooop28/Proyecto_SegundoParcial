import { Schema } from 'mongoose';

export const clienteSchema = new Schema({
    name: String,
    lastname: String,
    identification: String,
});
