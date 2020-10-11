import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsDefined()
    @IsNotEmpty()
    NameProduct: string;

    Category: string;
    Description: string;
    ProductQuantity: number;
    Status: boolean;
    TimeStamp: Date;
}