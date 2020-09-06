const axios = require('axios');

exports.getFlightsAPI1 = async (url, res) => {
    try {
        const session = await axios({
            method: "GET",
            url: url,
            auth: {
                username: 'ct_interviewee',
                password: 'supersecret'
            }
        })
        return session
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'An error has happened getting all flights, please try again'
        })
    }
}