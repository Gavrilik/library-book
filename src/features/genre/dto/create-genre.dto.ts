import { IsNumber, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  genre: string;
  @IsNumber({}, { each: true })
  authorIds: number[];
}
