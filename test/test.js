const dotenv = require('dotenv').config({ path: `${__dirname}/../config.env` });
const chai = require('chai');
const { assert } = require('chai');
const flightController = require('../controllers/index');
const flightsAPI = require('../controllers/getFlightsData');
const fixtures = require('./fixtures');

describe('controllers/index.js', function () {

    it('isSameSlice when different slices returns false', async function () {
        assert.isFalse(flightController.isSameSlicesArray(fixtures.slice1, fixtures.slice2), 'slices should be different')
    })
    it('isSameFlight when different flights returns false', async function () {
        assert.isFalse(flightController.isSameFlight(fixtures.flight1, fixtures.flight2), 'flights should be different');
    });
    it('mergeFlightsList when flights lists have duplicates returns a list without duplicates', async function () {
        assert.equal(JSON.stringify(await flightController.mergeFlightLists(fixtures.source1, fixtures.source2)), JSON.stringify(fixtures.result), 'final result is not deleting duplicates');
    })
});