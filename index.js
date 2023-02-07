const server = require("./src/app.js");
//const { conn } = require("./src/db.js");
//const loadDb = require("./src/loadDb.js");
//require("dotenv").config();
//const { PORT } = process.env;

const fs = require("fs");
//const https = require("https");
const http = require("http");

//const privateKey = fs.readFileSync("./sslcert/private.key", "utf8");
//const certificate = fs.readFileSync("./sslcert/certificate.crt", "utf8");
//const credentials = { key: privateKey, cert: certificate };

//const httpsServer = https.createServer(credentials, server);
const httpServer = http.createServer(server);

const startServer = () => {
  httpServer.listen(3001, async () => {
    console.log("Listening at PORT " + 3001);
    //await loadDb();
  });
};

// const startDB = async () => {
//   return await conn.sync({ force: true });
// };

const start = async () => {
  //await startDB();
  startServer();
};

start();
