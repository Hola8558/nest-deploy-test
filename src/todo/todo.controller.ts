import { Controller, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post()
    async create(@Body() createdTodo: any){
        return createdTodo;
    }
}
