# Flights Application

Project application that is able to request all flight data from two APIs (<https://discovery-stub.comtravo.com/source1>) and (<https://discovery-stub.comtravo.com/source2>) and then it will send back to customer a response in JSON format of all flights but deleting duplicates in the process.

### Setup 
* Open a terminal in the root folder of this project and run `npm install` in order to install all dependencies of the package.json.
* Save  the following environment variables in a `config.env` file:

```shell
LINK_ONE=https://discovery-stub.comtravo.com/source1
LINK_TWO=https://discovery-stub.comtravo.com/source2
USERNAME_API=ct_interviewee
PASSWORD_API=supersecret
```

* In the same terminal run `npm run start`.
* Make a GET request in the only endpoint of the project (<http://localhost:3000/flights>) to request all data from both APIs, it will sent you a response of all flights sorted without any duplicates.

## Testing

* Run `npm run test` and it will run all test that are storaged on `/test` folder

## Libraries / Dependencies

- [Axios](https://github.com/axios/axios) - Used to fetch flights from APIs
- [Dotenv](https://www.npmjs.com/package/dotenv) - Used to storage environment variables in a .env file 
- [Express](https://expressjs.com/) - Used as web framework to serve the flights endpoint
- [Eslint](https://eslint.org) - Used as a tool to improve code and avoid code bugs
- [Prettier](https://prettier.io) - Used as a tool to improve code and avoid code bugs
- [Mocha](https://mochajs.org) - Used for testing purposes
- [Chai](https://www.chaijs.com) - Used for testing purposes

