const flightsAPI = require('./getFlightsData');
const { json } = require('express');

const allFlights = [];

exports.getFlights = async () => {
    const source1 = await flightsAPI.getFlightsAPI1(process.env.LINK_ONE);
    const source2 = await flightsAPI.getFlightsAPI1(process.env.LINK_TWO);
    const flightsPromise = new Promise((resolve, reject) => {
        if (source1.data != undefined || source2.data != undefined) {
            resolve(allFlights.push(source1.data.flights, source2.data.flights));
        }
        else {
            reject('Unable to get flights info, please try again')
        }
    });
    return allFlights;
}

exports.deleteDuplicates = async () => {
    const duplicatedFilter = new Map();
    const filter= [];
    const flightsTogether = [...allFlights[0], ...allFlights[1]];
    const loop = flightsTogether.forEach((val, i) => {
        allSlices.push(val.slices);
        // if (!duplicatedFilter.has(val.slices[i].flight_number)) { 
        //     duplicatedFilter.set(val.slices[i].flight_number, val.slices[i].departure_date_time_utc);
        // }
    })
    // for (const [key, val] of allArray) {
    //     const { flight_number, departure_date_time_utc } = val[1].slices;
    //     if (!duplicatedFilter.has(flight_number)) {
    //         duplicatedFilter.set(flight_number, departure_date_time_utc);
    //     }
    // //     else {
    // //         // const index = allFlights.data.flights.slices.indexOf(i);
    // //         // allFlights.data.flights.slices.slice(index); 
    // //     }
    // }
    console.log(allSlices);
    return duplicatedFilter;
}

exports.response = async (req, res, next) => {
    try {
        const getRequest = await this.getFlights();
        const deleteDuplicates = await this.deleteDuplicates();
        res.status(200).json({
            status: 'success',
            data: JSON.stringify(deleteDuplicates)
        })

    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'An error has happened getting all flights, please try again'
        })
    }
};