import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsInt()
  dateOfBirth: number;
  @IsNumber()
  genreId: number;
}
