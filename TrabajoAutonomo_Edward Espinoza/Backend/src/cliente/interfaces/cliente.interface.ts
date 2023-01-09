import {Document} from 'mongoose'

export interface cliente extends Document {

    readonly name: string;
    readonly lastname: string;
    readonly identification : string;
}