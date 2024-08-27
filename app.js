const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 7500;
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const patientRouter = require('./Router/PatientRouter');

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{console.log("Mongo db is connected")})
.catch(()=>{console.log("Mongo db is not connected")})

app.get('/',(req,res)=>{
    res.send("Procle HealthCare")
})

app.use('/api',patientRouter)
app.listen(PORT,()=>console.log("Server is running on:",PORT))