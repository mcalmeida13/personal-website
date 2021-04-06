import * as http from 'http';
import { createReadStream, createWriteStream } from 'fs';


const server = http.createServer((req,res) =>{

    const readStream  = createReadStream('./index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);

});    

server.listen('3000');