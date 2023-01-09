/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface Inversionista extends Document{
  readonly nombre: string;
  readonly identificador: string;
}