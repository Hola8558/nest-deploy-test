import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.chemas';
import { TodoController } from './todo.controller';

@Module({
    imports: [ MongooseModule.forFeature([{
        name: Todo.name,
        schema: TodoSchema
    }]) ],
    controllers: [TodoController]
})
export class TodoModule {
    
}
