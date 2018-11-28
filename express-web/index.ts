import express, { Request, Response, NextFunction } from 'express';

const app = express();

interface Access {
  ip: string | undefined;
  timestamp: Date;
}

let accesses: Array<Access> = [];

function ipLogger(request: Request, response: Response, next: NextFunction) {
  let ip = request.connection.remoteAddress;
  console.log(ip);
  accesses.push({
    ip,
    timestamp: new Date()
  });
  next();
}
app.use(ipLogger);


app.get('/', (request, response) => {
  response.send(accesses);
});
app.get('/user/:userId/cars/:carId', (request, response) => {
  response.send(`userId=${request.params.userId}
                 <br> 
                 carId=${request.params.carId}
                 <br>
                 color=${request.query.color}
                 `);
});

app.listen(3000, '0.0.0.0', () => console.log('listening...'));