import { Body, Controller, Delete, Post, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { SendDTO } from './dto/send.dto';
import { Observable, Subject } from 'rxjs';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Webhook')
@Controller()
export class AppController {
  private readonly messageStream$ = new Subject<{ data: any }>();

  constructor(private readonly appService: AppService) {}

  @Post('/send')
  @ApiOperation({ summary: 'ส่งข้อความไปยัง webhook stream' })
  @ApiBody({ type: SendDTO })
  sendData(@Body() body: SendDTO) {
    this.appService.addData(body.message);
    const data = this.appService.getData();

    this.messageStream$.next({ data });

    return {
      status: 'added',
      latest: body.message,
      allMessage: data,
    };
  }

  @Delete('/clear')
  @ApiOperation({ summary: 'ลบข้อความทั้งหมดในระบบ' })
  sendClear() {
    this.appService.clearData();
    this.messageStream$.next({ data: [] });
    return {
      status: 'cleared',
      message: 'All messages have been removed',
    };
  }

  @Sse('/data')
  @ApiOperation({ summary: 'รับข้อมูลแบบ realtime ผ่าน Server-Sent Events' })
  getData(): Observable<{ data: any }> {
    return this.messageStream$.asObservable();
  }
}
