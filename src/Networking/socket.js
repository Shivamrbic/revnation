import WS from '@adonisjs/websocket-client';

import { ROOT_URL } from './crypto';

export class SocketConnection {
  isConnected = false;
  connect() {
    if (!this.ws && !this.isConnected) {
      this.ws = WS(`wss://${ROOT_URL}`).connect();

      this.ws.on('open', () => {
        this.isConnected = true;
      });
    }

    return this;
  }

  close() {
    this.ws?.close();
    this.isConnected = false;
    console.log('Connection closed');
    return this;
  }

  subscribe(channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel, handler), 1000);
    } else {
      const result = this.ws.subscribe(channel);
      result.on('message', (message) => {
        handler(message);
      });
      result.on('error', (error) => {});

      return result;
    }
  }
}

export default new SocketConnection();
