import { Server } from './Server';

export class MoocBackendApp {
    server?: Server;

    async start(): Promise<void> {
        const port = Number(process.env.PORT) ?? 5000;
        this.server = new Server(port);

        return this.server.listen();
    }

    get httpServer(): Server['httpServer'] | undefined {
        return this.server?.getHTTPServer();
    }

    async stop(): Promise<void> {
        return this.server?.stop();
    }
}