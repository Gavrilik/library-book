import { IsInt, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsInt()
  dateOfBirth: number;
}
