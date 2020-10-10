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

    async crearUnProducto(createProductDto: CreateProductDto) {
        const createdProduct = new this.productModel(createProductDto);
        console.log('si paso aqui');
        createdProduct.save(function(err, user) {
            console.log('err', err);
            console.log('user', user);
            if(err) {
                return json(err);
            } else {
                return user;
            }
        });
    }

    editarUnProducto() {

    }

    eliminarUnProducto() {

    }
}
