import { Prop, SchemaFactory } from "@nestjs/mongoose"

export class Contactano {

    @Prop()
    email: string


    @Prop()
    nombres: string



    @Prop()
    mensaje: string
}


export const ContactanosSchema = SchemaFactory.createForClass( Contactano )