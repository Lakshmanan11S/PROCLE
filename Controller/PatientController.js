const axios = require('axios');

exports.patientCredentials = async(req,res)=>{
    try{
        const{family,given,gender,birthDate}=req.body
        if(!given){
            return res.status(404).json({message:"FamilyName is required"})
        }
        if(!gender){
            return res.status(404).json({message:"Gender is required"})
        }
        const params = new URLSearchParams();
        params.append('given', given);
        params.append('gender', gender);
     

        const response = await axios.get(process.env.GETPATIENT_URL,
           
            {
                params,
                headers: {
                    'Accept': 'application/fhir+json',
                    'Authorization': 'Basic MGY0Yjk2YmMtMmZiYS00ZDFkLTkwOTItNDIzMjNkZmQwYmVhOjRCd1pyU3hWbTRrTEJ4bjc1Zmhoemt0Tk1Pd3FDTzly',
                },
                timeout: 5000, 
            }
        );

       
        res.status(200).json({message:"Patient Details",data:response.data})
        return response.data;


    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}





exports.getToken=async(req,res)=> {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('scope', 'system/AllergyIntolerance.read system/AllergyIntolerance.write system/Appointment.read system/Appointment.write system/CarePlan.read system/Condition.read system/Condition.write system/Immunization.read system/Immunization.write system/Patient.read system/Patient.write system/Person.read system/Practitioner.read system/Practitioner.write');

        const response = await axios.post(process.env.GETTOKEN_URL,
            params,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic MGY0Yjk2YmMtMmZiYS00ZDFkLTkwOTItNDIzMjNkZmQwYmVhOjRCd1pyU3hWbTRrTEJ4bjc1Zmhoemt0Tk1Pd3FDTzly',
                },
                timeout: 5000, 
            }
        );

        
        res.status(200).json({message:"Token Generated Succesfully",data:response.data})
        return response.data;
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}


exports.patientId=async(req,res)=>{
    try{
        const {id}=req.body
        if(!id){
            return res.status(404).json({message:"Must Be Need Patiend Id"})
        }
        const params = new URLSearchParams();
        params.append('id', id);

        const response = await axios.get( `https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient/${id}`,
           
            {   params,
                headers: {
                    'Accept': 'application/fhir+json',
                    'Authorization': 'Basic MGY0Yjk2YmMtMmZiYS00ZDFkLTkwOTItNDIzMjNkZmQwYmVhOjRCd1pyU3hWbTRrTEJ4bjc1Zmhoemt0Tk1Pd3FDTzly',
                },
                timeout: 5000, 
            }
        );

        res.status(200).json({message:"Patient Details",data:response.data})
        return response.data;
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}