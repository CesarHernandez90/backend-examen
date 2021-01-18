import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product-dto';

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

    async editarUnProducto(id: number, createProductDto: CreateProductDto) : Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate({_id: id}, createProductDto, {useFindAndModify: false});
        return updatedProduct;
    }

    async eliminarUnProducto(id: number) : Promise<Product> {
        return this.productModel.findByIdAndDelete(id);
    }
}
