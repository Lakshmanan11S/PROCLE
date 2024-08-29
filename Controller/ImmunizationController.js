const axios = require('axios');
const Authorization = require('../Authorization');

exports.immunizationData = async (req, res) => {
    try {
        const { patient } = req.query;
        if (!patient) {
            return res.status(404).json({ message: "Patient ID is required" });
        }

        const params = new URLSearchParams();
        params.append('patient', patient);

        const response = await axios.get(process.env.IMMUNIZATION_URL, {
            params,
            headers: {
                ...Authorization()
            },
            timeout: 120000, 
            maxContentLength: 50 * 1024 * 1024, 
            maxBodyLength: 50 * 1024 * 1024, 
        });

        res.status(200).json({ message: "Patient Immunization Details", data: response.data });
        return response.data;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            res.status(504).json({ message: "Request Timeout", error: error.message });
        } else if (error.response) {
            res.status(error.response.status).json({ message: error.response.statusText, error: error.response.data });
        } else {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }
};
