// require("dotenv").config();
// const CORS = process.env.CORS;
const express = require("express");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const routes = require("./routes/index.js");
// const cors = require("cors");
// const fileUpload = require("express-fileupload");

// console.log(CORS === "ENABLE" ? "CORS Mode On" : "CORS Mode Off");

const server = express();

server.name = "API";

// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));
// server.use(cookieParser());
// server.use(morgan("dev"));
// server.use(
//   "/",
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "./uploads",
//   })
// );
// CORS
//   ? server.use(cors())
//   : server.use((req, res, next) => {
//       res.header("Access-Control-Allow-Origin", "http://6evi.duckdns.org");
//       res.header("Access-Control-Allow-Credentials", "true");
//       res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//       );
//       res.header(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, DELETE"
//       );
//       next();
//     });

//server.use("/", express.static("../ecommerce-client/build"));
//server.use("/", routes);

// server.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });
server.use("/test", (req, res) => {
  return res.send("Servidor escuchando en el puerto 3001");
});
module.exports = server;
