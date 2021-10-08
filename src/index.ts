import path from 'path';
import { SHARE_ENV, Worker } from 'worker_threads';

export default class Dashboard {
    port = 9090;
    server: Worker;
    client: Worker;
    exec: (_, data: any) => any;
    constructor(options?: { port: number }) {
        Object.assign({ port: process.env.PORT || 9090, ...options });
        console.log(path.join(__dirname, 'client', 'index.js'));
        this.client = new Worker(path.join(__dirname, '../client/index.js'), { env: SHARE_ENV });
        this.server = new Worker(path.join(__dirname, '../server/dist/index.js'), { env: SHARE_ENV });
        this.exec = (_, data) => {
            console.log(data);
            // this.client.postMessage({ event: 'discord', data });
        };
    }
}

console.log({ port: process.env.PORT });

const dash = new Dashboard();

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

dash.exec('', { ez: 'e' });
const sendDummyData = async () => {
    for (let i = 0; i < 100; i++) {
        dash.exec('', { i });
        await delay(10000);
    }
};

sendDummyData();
