const axios = require('axios');
const Authorization = require('../Authorization');


exports.medicationAdmin = async(req,res)=>{
    try{
        const {patient}=req.query
        if(!patient){
            return res.status(404).json({messager:"Patient Id Must Be Required"})
        }
        const params = new URLSearchParams()
        params.append('patient',patient)

        const response = await axios.get(process.env.MEDICATIONADMIN_URL ,
        {
            params,
            headers:{
                  ...Authorization()
            }
        })
        res.status(200).json({message:"Medication Administrations Details",data:response.data})

    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
}