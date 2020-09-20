const flightsAPI = require('./getFlightsData');
const { json } = require('express');

const isSameSlice = (slice1, slice2) => {
    for (let i = 0; i < slice1.length; i++) {
        let isFound = false;
        for (let j = 0; j < slice2.length; j++) {
            if (slice1.flight_number == slice2.flight_number && slice1.departure_date_time_utc == slice2.departure_date_time_utc) {
                isFound = true;
                break
            }
        }
        if (isFound == false) {
            return false
        }
    }
    return true
};

const isSameFlight = (flight1, flight2) => {
    if (flight1.slices.length != flight2.slices.length) {
        return false;
    }
    if (flight1.price != flight2.price) {
        return false;
    }
    if (isSameSlice(flight1.slices, flight2.slices) == false) {
        return false
    }
    return true
};

exports.mergeFlightLists = async (source1, source2) => {
    const flightsToAdd = [];
    for (let i = 0; i < source1.length; i++) {
        let isFound = false;
        for (let j = 0; j < source2.length; j++) {
            if (isSameFlight(source1[i], source2[j]) == true) {
                isFound = true;
                break
            }
        }
        if (isFound == false) {
            flightsToAdd.push(source1[i]);
        }
    }
    return [...source2, ...flightsToAdd];
}

exports.response = async (req, res, next) => {
    try {
        const source1 = await flightsAPI.getFlights(process.env.LINK_ONE);
        const source2 = await flightsAPI.getFlights(process.env.LINK_TWO);
        const flights = await this.mergeFlightLists(source1, source2);
        res.status(200).json({
            status: 'success',
            data: JSON.stringify(flights)
        })
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: 'failed',
            message: 'Unable to get requested flights, please try again'
        })
    }
};