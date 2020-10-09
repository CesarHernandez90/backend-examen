import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({required: true, maxlength: 150})
    NameProduct: string;

    @Prop({required: true, enum: ['Bebidas', 'Limpieza', 'Botanas', 'Cremería']})
    Category: string;

    @Prop({required: true, maxlength: 450})
    Description: string;

    @Prop({required: true, min: 0, max: 100})
    ProductQuantity: number;

    @Prop({default: Date.now()})
    TimeStamp: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);