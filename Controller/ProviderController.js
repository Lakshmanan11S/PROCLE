const axios = require('axios');


exports.provider = async(req,res)=>{
    try{
        // const {patient}=req.query
        // if(!patient){
        //     return res.status(404).json({messager:"Patient Id Must Be Required"})
        // }
        // const params = new URLSearchParams()
        // params.append('patient',patient)

        const response = await axios.get(`https://fhir-ehr-code.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Practitioner?active=true`,
        {
            params,
            headers:{
                
                  'Authorization': 'Basic MGY0Yjk2YmMtMmZiYS00ZDFkLTkwOTItNDIzMjNkZmQwYmVhOjRCd1pyU3hWbTRrTEJ4bjc1Zmhoemt0Tk1Pd3FDTzly',
            }
        })
        res.status(200).json({message:"Provider Details",data:response.data})

    }catch(error){
        res.status(500).json({message:"Internal Server Error",error})
    }
}