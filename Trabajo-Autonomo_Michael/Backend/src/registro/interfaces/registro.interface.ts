 import { Document } from "mongoose";
 
 
 export interface Registro extends Document{

   readonly Deletreo: String;
   readonly silabas:String;
    readonly fonetica:String

}