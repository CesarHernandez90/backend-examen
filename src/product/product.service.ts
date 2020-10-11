import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product-dto';
import { json } from 'express';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) {}

    async listarTodosLosProductos() : Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async crearUnProducto(createProductDto: CreateProductDto) : Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    editarUnProducto() {

    }

    async eliminarUnProducto(id: number) : Promise<Product> {
        return this.productModel.findByIdAndDelete(id);
    }
}
