/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  autor: string;
  @IsString()
  tags: string;
}