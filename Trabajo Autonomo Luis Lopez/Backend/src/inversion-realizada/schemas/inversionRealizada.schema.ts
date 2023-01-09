/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const InversionRealizadaSchema = new Schema({
  idinversionista: String,
  idconceptoinversion: String,
  valorinversion: String,
  fecha: String,
  duracioninversion: String,
})