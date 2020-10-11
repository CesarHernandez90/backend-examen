import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

import { CreateProductDto } from './dto/create-product-dto';
import { ProductService } from './product.service';

@Controller()
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
    @UsePipes(new ValidationPipe())
    async crearUnProducto(
        @Res() res: Response,
        @Body() createProductDto: CreateProductDto
    ) {
        const product = await this.productService.crearUnProducto(createProductDto);
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/eliminarUnProducto/:id')
    async eliminarUnProducto(
        @Res() res: Response,
        @Param('id') id,
    ) {
        const product = await this.productService.eliminarUnProducto(id);
        if(!product) return res.status(HttpStatus.NOT_FOUND).json({error: 'No se encontró el ID del producto'});
        return res.status(HttpStatus.OK).json(product);
    }
}
