import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/prodcut.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor ( @InjectModel('Product') private readonly productModel: Model<Product> ){}

    async getProdcuts() : Promise<Product[]>{
        const products = await this.productModel.find();
        return products;
    }

    async getProdcut(productID: string) : Promise<Product>{
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProdcuts(createProductDTO: CreateProductDTO): Promise<Product>{
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID: string): Promise<Product>{
        const deletedeProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedeProduct;
    }

    async updateProdcut(productID: string, createdProductDTO: CreateProductDTO): Promise<Product>{
        const product = await this.productModel.findByIdAndUpdate(productID, createdProductDTO, {new: true});
        return product;
    }

}
