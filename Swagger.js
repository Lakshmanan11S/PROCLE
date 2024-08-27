

const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "PROCLE HEALTH API's",
    description: "Version 1.0"
  },
  host: "procle.onrender.com",  
  basePath: "/",
  schemes: ["https"], 
  consumes: ["application/json"],
  produces: ["application/json"]
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];


swaggerAutogen(outputFile, routes, doc);