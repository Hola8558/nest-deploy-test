import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule, MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/test-nestjs-prueba?${process.env.MONGO_QUERY}`, {
    dbName: 'test-nestjs',
  }), TodoModule,
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
