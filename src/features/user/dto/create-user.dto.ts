import { IsEmail, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;
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
}
