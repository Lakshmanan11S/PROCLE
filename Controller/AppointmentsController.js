const axios = require('axios');
const Authorization = require('../Authorization');


exports.appointment = async(req,res)=>{
    try{
        const {patient}=req.query
        if(!patient){
            return res.status(404).json({messager:"Patient Id Must Be Required"})
        }
        const params = new URLSearchParams()
        params.append('patient',patient)

        const response = await axios.get(`https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Appointment?patient=${patient}&date=ge2020-01-01T22:22:16.270Z`,
        {
            params,
            headers:{
                  ...Authorization()
            }
        })
        res.status(200).json({message:"Appointment  Details",data:response.data})

    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
}