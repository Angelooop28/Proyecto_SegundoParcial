import { Schema } from 'mongoose';

export const gastoclienteSchema = new Schema({

    caracteristicas: String,
    fecha: String,
    hora: String,
    valortotal: Number,
});