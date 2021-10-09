import { createServer } from 'http';
import { parentPort as parent, isMainThread } from 'worker_threads';
import WebSocket from 'ws';
import fetch from 'node-fetch';

const server = createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log(`Someone joined`);

    ws.send('hi');
});
if (!isMainThread) {
    parent.on('close', process.exit);
    parent.on('message', data => {
        console.log(data);
        wss.clients.forEach(client => client.send(data));
    });
    parent.on('messageerror', console.error);
}

server.listen(9094, () => console.log('Websocket server running'));
