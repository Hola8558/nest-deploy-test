import { Body, Controller, HttpStatus, Post, Res, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor( private productService : ProductService ){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProdcuts(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto Succesfully Created',
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProdcuts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:prodID')
    async getProduct(@Res() res, @Param('prodID') prodID){
        const product = await this.productService.getProdcut(prodID);
        if (!product) throw new NotFoundException('Producto no existe')
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('prodID') prodID ){
        const product = await this.productService.deleteProduct(prodID);
        if (!product) throw new NotFoundException('Producto no existe')
        return res.status(HttpStatus.OK).json({
            message: 'Producto Eliminado',
            product
        })
        //http://localhost:3000/product/delete?prodID=653ea761157c1d375a9664fb
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('prodID') prodID ){
        const product = await this.productService.updateProdcut(prodID, createProductDTO);
        if (!product) throw new NotFoundException('Producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Producto Actualizado',
            product
        });
    }

}
