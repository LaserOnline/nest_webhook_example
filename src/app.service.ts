import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private data: string[] = [];

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }

  clearData(): void {
    this.data = [];
  }
}
