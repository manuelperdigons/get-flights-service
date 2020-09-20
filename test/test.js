const dotenv = require('dotenv').config({ path: `${__dirname}/../config.env` });
const chai = require('chai');
const { assert } = require('chai');
const flightController = require('../controllers/index');
const flightsAPI = require('../controllers/getFlightsData');

describe('controllers/index.js', function () {

    it('should remove duplicated flights', async function () {
        const source1 = await flightsAPI.getFlights(process.env.LINK_ONE);
        const source2 = await flightsAPI.getFlights(process.env.LINK_TWO);
        assert.isArray(await flightController.mergeFlightLists(source1, source2), 'Create final flights list correctly');
    });
});