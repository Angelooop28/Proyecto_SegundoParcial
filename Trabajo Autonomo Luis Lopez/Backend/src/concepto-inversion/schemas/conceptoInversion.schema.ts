/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose'

export const ConceptoInversionSchema = new Schema({
  concepto: String,
  detalle: String,
})