const axios = require('axios');

exports.getFlights = async (url) => {
    try {
        const session = await axios({
            method: "GET",
            url: url,
            auth: {
                username: process.env.USERNAME_API,
                password: process.env.PASSWORD_API
            },
            timeout: 1000
        })
        return session.data
    } catch (error) {
        console.log(error);
        console.log(error.response.status);
        return []
    }
}