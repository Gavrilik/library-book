import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  create(@Body() createUserDto: CreateUserDto): Promise<any> {
    //console.log('createUserDto', createUserDto); //вывод в консоль createUserDto
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<any> {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('local'))
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('local'))
  remove(@Param('id') id: number): Promise<any> {
    return this.userService.remove(+id);
  }
}
