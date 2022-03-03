import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  tags: string;

  @IsNumber()
  authorId: number;
}
