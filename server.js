const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/pupapi", router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`pupapi Server is running on port ${PORT}`);
});
