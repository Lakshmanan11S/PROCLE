

const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "PROCLE HEALTH API's",
    description: "Version 1.0"
  },
  host: "localhost:7500",
  basePath:"/",
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];


swaggerAutogen(outputFile, routes, doc);