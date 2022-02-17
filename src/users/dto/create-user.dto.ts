import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "Your email" })
  readonly email: string;

  @ApiProperty({ example: "141641651", description: "Password" })
  readonly password: string;
}
