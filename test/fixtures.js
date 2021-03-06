exports.slice1 = [
    {
        "origin_name": "Schonefeld",
        "destination_name": "Stansted",
        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
        "flight_number": "144",
        "duration": 115
    },
    {
        "origin_name": "Stansted",
        "destination_name": "Schonefeld",
        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
        "flight_number": "145",
        "duration": 110
    }
]

exports.slice2 = [
    {
        "origin_name": "Schonefeld",
        "destination_name": "Stansted",
        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
        "flight_number": "8545",
        "duration": 120
    },
    {
        "origin_name": "Stansted",
        "destination_name": "Schonefeld",
        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
        "flight_number": "8544",
        "duration": 120
    }
]

exports.flight1 = {
    "slices": [
        {
            "origin_name": "Schonefeld",
            "destination_name": "Stansted",
            "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
            "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
            "flight_number": "8545",
            "duration": 120
        },
        {
            "origin_name": "Stansted",
            "destination_name": "Schonefeld",
            "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
            "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
            "flight_number": "145",
            "duration": 110
        }
    ],
    "price": 134.81
}

exports.flight2 = {
    "slices": [
        {
            "origin_name": "Schonefeld",
            "destination_name": "Stansted",
            "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
            "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
            "flight_number": "8545",
            "duration": 120
        },
        {
            "origin_name": "Stansted",
            "destination_name": "Schonefeld",
            "departure_date_time_utc": "2019-08-10T05:35:00.000Z",
            "arrival_date_time_utc": "2019-08-10T07:35:00.000Z",
            "flight_number": "8542",
            "duration": 120
        }
    ],
    "price": 134.81
}

exports.source1 = [
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                "flight_number": "144",
                "duration": 115
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                "flight_number": "145",
                "duration": 110
            }
        ],
        "price": 129
    },
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                "flight_number": "8545",
                "duration": 120
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                "flight_number": "8544",
                "duration": 120
            }
        ],
        "price": 117.01
    }
]

exports.source2 = [
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                "flight_number": "144",
                "duration": 115
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                "flight_number": "145",
                "duration": 110
            }
        ],
        "price": 129
    },
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T16:00:00.000Z",
                "arrival_date_time_utc": "2019-08-08T17:55:00.000Z",
                "flight_number": "146",
                "duration": 115
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                "flight_number": "8544",
                "duration": 120
            }
        ],
        "price": 130.1
    }
]

exports.result = [
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                "flight_number": "144",
                "duration": 115
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                "flight_number": "145",
                "duration": 110
            }
        ],
        "price": 129
    },
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T16:00:00.000Z",
                "arrival_date_time_utc": "2019-08-08T17:55:00.000Z",
                "flight_number": "146",
                "duration": 115
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                "flight_number": "8544",
                "duration": 120
            }
        ],
        "price": 130.1
    },
    {
        "slices": [
            {
                "origin_name": "Schonefeld",
                "destination_name": "Stansted",
                "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                "flight_number": "8545",
                "duration": 120
            },
            {
                "origin_name": "Stansted",
                "destination_name": "Schonefeld",
                "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                "flight_number": "8544",
                "duration": 120
            }
        ],
        "price": 117.01
    }
]