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
        return session.data.flights
    } catch (error) {
        console.error('Unable to get flights, please try again');
        return []
    }
}