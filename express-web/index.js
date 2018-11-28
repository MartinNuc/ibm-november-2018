"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var accesses = [];
function ipLogger(request, response, next) {
    var ip = request.connection.remoteAddress;
    console.log(ip);
    accesses.push(ip);
    next();
}
app.use(ipLogger);
app.get('/', function (request, response) {
    response.send(accesses);
});
app.get('/user/:userId/cars/:carId', function (request, response) {
    response.send("userId=" + request.params.userId + "\n                 <br> \n                 carId=" + request.params.carId + "\n                 <br>\n                 color=" + request.query.color + "\n                 ");
});
app.listen(3000, '0.0.0.0', function () { return console.log('listening...'); });
