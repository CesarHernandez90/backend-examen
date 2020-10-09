import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateProductDto } from './dto/create-product-dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(
        private productService: ProductService,
    ) {}

    @Get('/listarTodosLosProductos')
    async listarTodosLosProductos(
        @Res() res: Response,
    ) {
        const products = await this.productService.listarTodosLosProductos();
        return res.status(HttpStatus.OK).json(products);
    }

    @Get('/listarUnProducto/:id')
    listarUnProducto(
        @Res() res: Response,
        @Param('id') id
    ) {

    }

    @Post('/crearUnProducto')
    async crearUnProducto(
        @Res() res: Response,
        @Body() createProductDto: CreateProductDto
    ) {
        const product = await this.productService.crearUnProducto(createProductDto);
        return res.status(HttpStatus.OK).json(product);
    }
}
