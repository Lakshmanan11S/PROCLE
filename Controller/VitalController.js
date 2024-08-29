const axios = require('axios');
const Authorization = require('../Authorization');

exports.vitalList = async (req, res) => {
    try {
        const {patient,category} = req.query;
        if (!patient) {
            return res.status(404).json({ message: "Patient ID is required" });
        }
       
        const params = new URLSearchParams();
        params.append('patient', patient); 
        if(category){
            params.append('category',category)
        }
        const response = await axios.get(process.env.VITALLIST_URL,
            {
                params, 
                headers: {
                    ...Authorization()
                },
                
            }
        );

        res.status(200).json({ message: "Patient Vital Details", data: response.data });
        return response.data;
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
