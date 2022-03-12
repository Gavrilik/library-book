import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsEmail()
  email: string;
  @IsInt()
  phoneNumber: number;
  @IsInt()
  age: number;
  @IsString()
  password: string;
}

//favoriteBooks
