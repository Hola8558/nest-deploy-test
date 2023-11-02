import { Controller, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post()
    async create(todo: any){
        return todo;
    }
}
