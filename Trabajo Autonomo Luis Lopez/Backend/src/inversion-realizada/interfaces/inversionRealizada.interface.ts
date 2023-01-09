/* eslint-disable prettier/prettier */
import { Document } from "mongoose";

export interface InversionRealizada extends Document{
    readonly idinversionista: string;
    readonly idconceptoinversion: string;
    readonly valorinversion: string;
    readonly fecha: string;
    readonly duracioninversion: string;
  }