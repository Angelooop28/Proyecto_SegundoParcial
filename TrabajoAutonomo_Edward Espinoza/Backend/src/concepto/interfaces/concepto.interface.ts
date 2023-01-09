import {Document} from 'mongoose'

export interface concepto extends Document {
    readonly producto: string;
    readonly precio: number;
    readonly description  : string;
}
