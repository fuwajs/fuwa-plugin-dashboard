var fs = require('fs'),
    http = require('http');
const { parentPort: parent, isMainThread } = require('worker_threads');

const server = http.createServer();

function start(port) {
    server.listen(port, () => console.log(`Server running at port ${port}`));
}
server.on('request', (req, res) => {
    fs.readFile(__dirname + '/build' + req.url, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
if (isMainThread) {
    start(process.env.PORT || 9090);
} else {
    parent.on('message', ({ event, data }) => {
        switch (event) {
            case 'end':
                server.close();
                if (data.kill) process.exit();
        }
    });
    parent.on('close', process.exit);
    parent.on('messageerror', console.error);
}

start(9090);
