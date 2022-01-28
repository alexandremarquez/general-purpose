import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return { msg: 'ok' };
  }

  @Get()
  findAll() {
    return { msg: 'ok' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { msg: 'ok' };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return { msg: 'ok' };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { msg: 'ok' };
  }
}
