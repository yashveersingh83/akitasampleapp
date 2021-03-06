const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');
​
server.use(middlewares);
server.use(jsonServer.bodyParser);​


server.get('/infolist', (req, res) => {
  const users = readinforequests();
 
    res.status(200).send(users);
  
});

server.post('/addinforequest', (req, res) => {
  
 console.log('on server '+ req.body);
 const dbRaw = fs.readFileSync('./server/db.json');  
  const users = JSON.parse(dbRaw).inforequests
    db.inforequests.push(req.body);
  
});



​
​
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
​

​
function readinforequests() {
  const dbRaw = fs.readFileSync('./server/db.json');  
  const users = JSON.parse(dbRaw).inforequests
  return users;
}