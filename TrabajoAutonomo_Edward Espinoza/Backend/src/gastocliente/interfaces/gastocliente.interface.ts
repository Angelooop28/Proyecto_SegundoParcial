import {Document} from 'mongoose'

export interface gastocliente extends Document {

    readonly caracteristicas: string;
    readonly fecha: string;
    readonly hora: string;
    readonly valortotal : number;
}