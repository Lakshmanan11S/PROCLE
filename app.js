const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 7500;
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const patientRouter = require('./Router/PatientRouter');
const vitalsRouter = require('./Router/VitalsDataRouter');
const allergyRouter = require('./Router/AllergyDataRouter');
const immunizationRouter = require('./Router/ImmunizationRouter');
const conditionsRouter = require('./Router/ConditionsRouter');

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
app.use('/api',immunizationRouter)
app.use('/api',patientRouter)
app.use('/api',vitalsRouter)
app.use('/api',allergyRouter)
app.use('/api',conditionsRouter)


app.listen(PORT,()=>console.log("Server is running on:",PORT))