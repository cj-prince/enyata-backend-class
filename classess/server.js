const http = require('http');
const port = 5000

const server = http.createServer(function (req, res) {  
  
});

server.listen(port, () => console.log(`Node.js web server at port ${port} is running.. `) );
