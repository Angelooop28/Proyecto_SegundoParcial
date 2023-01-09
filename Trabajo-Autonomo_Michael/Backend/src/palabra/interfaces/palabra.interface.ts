import {  Document} from "mongoose";
export interface Palabra extends Document{
    palabra: string,
    Deletreo: string
}