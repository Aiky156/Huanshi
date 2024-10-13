const http = require('http');
const fs = require('fs');
const path = require('path');
const httpServer = require('http-server');

const server = httpServer.createServer({
    root: process.cwd(),
});

server.listen(80, () => {
    console.log('Server running at port 80');
});