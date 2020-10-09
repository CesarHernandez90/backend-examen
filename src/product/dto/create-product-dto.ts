import { Timestamp } from "rxjs";

export class CreateProductDto {
    NameProduct: string;
    Category: string;
    Description: string;
    ProductQuantity: number;
    Status: boolean;
    TimeStamp: Date;
}