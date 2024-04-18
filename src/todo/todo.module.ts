import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [PrismaModule],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
