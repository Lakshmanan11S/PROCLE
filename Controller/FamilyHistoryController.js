const axios = require('axios');


exports.familyHistory = async(req,res)=>{
    try{
        const {patient}=req.query
        if(!patient){
            return res.status(404).json({messager:"Patient Id Must Be Required"})
        }
        const params = new URLSearchParams()
        params.append('patient',patient)

        const response = await axios.get(process.env.FAMILYHISTORY_URL,
        {
            params,
            headers:{
                  'Accept': 'application/fhir+json',
            }
        })
        res.status(200).json({message:"Patient FamilyHistory Details",data:response.data})

    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
}