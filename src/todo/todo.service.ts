import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.chemas';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>){}

    async create(todo : any){
        const createdTodo = new this.todoModel(todo);
        return createdTodo.save();
    }
}
