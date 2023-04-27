import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class MicroserviceService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3000,
      },
    });
  }

  async send(pattern: string, data: any): Promise<any> {
    return this.client.send(pattern, data).toPromise();
  }
}
