import { IsNumber } from 'class-validator';

export class CreateFavoriteDto {
  @IsNumber({}, { each: true })
  bookIds: number[];
}
