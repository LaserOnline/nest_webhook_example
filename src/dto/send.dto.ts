/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SendDTO {
  @ApiProperty({
    description: 'ข้อความที่จะส่งไปยัง stream',
    example: 'Hello webhook',
  })
  @IsNotEmpty({ message: 'message is required and must not be empty' })
  message: string;
}
