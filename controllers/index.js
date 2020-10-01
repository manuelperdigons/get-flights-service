const flightsAPI = require('./getFlightsData');
const { json } = require('express');
const fixtures = require('../test/fixtures');

exports.isSameSlicesArray = (slices1, slices2) => {
    if (slices1.length != slices2.length) {
        return false;
    }
    for (let i = 0; i < slices1.length; i++) {
        let isFound = false;
        for (let j = 0; j < slices2.length; j++) {
            if (slices1[i].flight_number == slices2[j].flight_number && slices1[i].departure_date_time_utc == slices2[j].departure_date_time_utc) {
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

exports.isSameFlight = (flight1, flight2) => {
    if (flight1.price != flight2.price) {
        return false;
    }
    if (this.isSameSlicesArray(flight1.slices, flight2.slices) == false) {
        return false
    }
    return true
};

exports.mergeFlightLists = async (source1, source2) => {
    const flightsToAdd = [];
    for (let i = 0; i < source1.length; i++) {
        let isFound = false;
        for (let j = 0; j < source2.length; j++) {
            if (this.isSameFlight(source1[i], source2[j]) == true) {
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
        const flights = await this.mergeFlightLists(source1.flights, source2.flights);
        res.status(200).json({
            status: 'success',
            data: JSON.stringify(flights, undefined, 2)
        })
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: 'failed',
            message: 'Unable to get requested flights, please try again'
        })
    }
};