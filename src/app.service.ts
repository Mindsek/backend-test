import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return `Hello World from NestJS!, the current date is ${formattedDate} and the current time is ${formattedTime}`;
  }
}
