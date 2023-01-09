import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Segerencia {


    @Prop()
    CorreoElectronico: string

    @Prop()
    Sugrenecia: string

}

export const EsquemaSegerencia =  SchemaFactory.createForClass( Segerencia )