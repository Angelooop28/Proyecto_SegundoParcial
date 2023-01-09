/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface ConceptoInversion extends Document{
  readonly concepto: string;
  readonly detalle: string;
}