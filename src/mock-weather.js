export const initialWeather = {
  "4671654": {
    "coord": {
      "lon": -97.74,
      "lat": 30.27
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 67.33,
      "pressure": 1015,
      "humidity": 77,
      "temp_min": 64,
      "temp_max": 70
    },
    "visibility": 12874,
    "wind": {
      "speed": 6.93,
      "deg": 280
    },
    "clouds": {
      "all": 90
    },
    "dt": 1553959699,
    "sys": {
      "type": 1,
      "id": 3931,
      "message": 0.0077,
      "country": "US",
      "sunrise": 1553948560,
      "sunset": 1553993278
    },
    "id": 4671654,
    "name": "Austin",
    "cod": 200
  },
  "4930956": {
    "coord": {
      "lon": -71.06,
      "lat": 42.36
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 55.83,
      "pressure": 1020,
      "humidity": 62,
      "temp_min": 48,
      "temp_max": 62.01
    },
    "wind": {
      "speed": 10.29,
      "deg": 150,
      "gust": 8.2
    },
    "clouds": {
      "all": 48
    },
    "dt": 1553960847,
    "sys": {
      "type": 1,
      "id": 4967,
      "message": 0.0082,
      "country": "US",
      "sunrise": 1553941827,
      "sunset": 1553987207
    },
    "id": 4930956,
    "name": "Boston",
    "cod": 200
  },
  "4887398": {
    "coord": {
      "lon": -87.65,
      "lat": 41.85
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 41.45,
      "pressure": 1012,
      "humidity": 95,
      "temp_min": 39,
      "temp_max": 44.01
    },
    "visibility": 16093,
    "wind": {
      "speed": 3.36,
      "deg": 360
    },
    "clouds": {
      "all": 90
    },
    "dt": 1553960966,
    "sys": {
      "type": 1,
      "id": 4505,
      "message": 0.0141,
      "country": "US",
      "sunrise": 1553945821,
      "sunset": 1553991175
    },
    "id": 4887398,
    "name": "Chicago",
    "cod": 200
  }
};

export const initialForecast = {
  "4671654": {
    "cod": "200",
    "message": 0.0104,
    "cnt": 40,
    "list": [
      {
        "dt": 1553968800,
        "main": {
          "temp": 70.16,
          "temp_min": 70.16,
          "temp_max": 72.75,
          "pressure": 1015.81,
          "sea_level": 1015.81,
          "grnd_level": 992.48,
          "humidity": 54,
          "temp_kf": -1.44
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 19.17,
          "deg": 1.00171
        },
        "rain": {
          "3h": 0.015
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 18:00:00"
      },
      {
        "dt": 1553979600,
        "main": {
          "temp": 69.91,
          "temp_min": 69.91,
          "temp_max": 71.86,
          "pressure": 1016.03,
          "sea_level": 1016.03,
          "grnd_level": 992.67,
          "humidity": 47,
          "temp_kf": -1.08
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 20.58,
          "deg": 6.00549
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 21:00:00"
      },
      {
        "dt": 1553990400,
        "main": {
          "temp": 65.41,
          "temp_min": 65.41,
          "temp_max": 66.7,
          "pressure": 1017.82,
          "sea_level": 1017.82,
          "grnd_level": 994.24,
          "humidity": 40,
          "temp_kf": -0.72
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 20.94,
          "deg": 11.5027
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 00:00:00"
      },
      {
        "dt": 1554001200,
        "main": {
          "temp": 59.65,
          "temp_min": 59.65,
          "temp_max": 60.31,
          "pressure": 1021.8,
          "sea_level": 1021.8,
          "grnd_level": 997.81,
          "humidity": 39,
          "temp_kf": -0.36
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 18.14,
          "deg": 12.0028
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 03:00:00"
      },
      {
        "dt": 1554012000,
        "main": {
          "temp": 55.89,
          "temp_min": 55.89,
          "temp_max": 55.89,
          "pressure": 1024.38,
          "sea_level": 1024.38,
          "grnd_level": 1000.13,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 21.14,
          "deg": 14.0025
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 06:00:00"
      },
      {
        "dt": 1554022800,
        "main": {
          "temp": 52.53,
          "temp_min": 52.53,
          "temp_max": 52.53,
          "pressure": 1025.36,
          "sea_level": 1025.36,
          "grnd_level": 1000.92,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 21.14,
          "deg": 15.5028
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 09:00:00"
      },
      {
        "dt": 1554033600,
        "main": {
          "temp": 49.65,
          "temp_min": 49.65,
          "temp_max": 49.65,
          "pressure": 1027.15,
          "sea_level": 1027.15,
          "grnd_level": 1002.43,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 19.04,
          "deg": 14.5027
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 12:00:00"
      },
      {
        "dt": 1554044400,
        "main": {
          "temp": 48.78,
          "temp_min": 48.78,
          "temp_max": 48.78,
          "pressure": 1029.98,
          "sea_level": 1029.98,
          "grnd_level": 1005.17,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 16.8,
          "deg": 15.5024
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 15:00:00"
      },
      {
        "dt": 1554055200,
        "main": {
          "temp": 50.6,
          "temp_min": 50.6,
          "temp_max": 50.6,
          "pressure": 1029.74,
          "sea_level": 1029.74,
          "grnd_level": 1005.08,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 14.9,
          "deg": 15.5034
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 18:00:00"
      },
      {
        "dt": 1554066000,
        "main": {
          "temp": 52.99,
          "temp_min": 52.99,
          "temp_max": 52.99,
          "pressure": 1027.48,
          "sea_level": 1027.48,
          "grnd_level": 1002.95,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 12.8,
          "deg": 5.0025
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 21:00:00"
      },
      {
        "dt": 1554076800,
        "main": {
          "temp": 52.39,
          "temp_min": 52.39,
          "temp_max": 52.39,
          "pressure": 1026.21,
          "sea_level": 1026.21,
          "grnd_level": 1001.69,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 11.21,
          "deg": 9.50061
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 00:00:00"
      },
      {
        "dt": 1554087600,
        "main": {
          "temp": 48.12,
          "temp_min": 48.12,
          "temp_max": 48.12,
          "pressure": 1027.01,
          "sea_level": 1027.01,
          "grnd_level": 1002.36,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 7.16,
          "deg": 24.5001
        },
        "rain": {
          "3h": 0.005
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 03:00:00"
      },
      {
        "dt": 1554098400,
        "main": {
          "temp": 37.91,
          "temp_min": 37.91,
          "temp_max": 37.91,
          "pressure": 1027.05,
          "sea_level": 1027.05,
          "grnd_level": 1002.02,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.82,
          "deg": 31.5033
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 06:00:00"
      },
      {
        "dt": 1554109200,
        "main": {
          "temp": 33.77,
          "temp_min": 33.77,
          "temp_max": 33.77,
          "pressure": 1026.56,
          "sea_level": 1026.56,
          "grnd_level": 1001.36,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.15,
          "deg": 345.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 09:00:00"
      },
      {
        "dt": 1554120000,
        "main": {
          "temp": 33.47,
          "temp_min": 33.47,
          "temp_max": 33.47,
          "pressure": 1026.72,
          "sea_level": 1026.72,
          "grnd_level": 1001.57,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.38,
          "deg": 345.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 12:00:00"
      },
      {
        "dt": 1554130800,
        "main": {
          "temp": 50.41,
          "temp_min": 50.41,
          "temp_max": 50.41,
          "pressure": 1026.65,
          "sea_level": 1026.65,
          "grnd_level": 1002.04,
          "humidity": 45,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.61,
          "deg": 29.5004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 15:00:00"
      },
      {
        "dt": 1554141600,
        "main": {
          "temp": 59.28,
          "temp_min": 59.28,
          "temp_max": 59.28,
          "pressure": 1025.18,
          "sea_level": 1025.18,
          "grnd_level": 1000.95,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.44,
          "deg": 83.0025
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 18:00:00"
      },
      {
        "dt": 1554152400,
        "main": {
          "temp": 62.63,
          "temp_min": 62.63,
          "temp_max": 62.63,
          "pressure": 1022.69,
          "sea_level": 1022.69,
          "grnd_level": 998.71,
          "humidity": 44,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 4.56,
          "deg": 50.0006
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 21:00:00"
      },
      {
        "dt": 1554163200,
        "main": {
          "temp": 61.29,
          "temp_min": 61.29,
          "temp_max": 61.29,
          "pressure": 1022.35,
          "sea_level": 1022.35,
          "grnd_level": 998.32,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 5.93,
          "deg": 49.0007
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 00:00:00"
      },
      {
        "dt": 1554174000,
        "main": {
          "temp": 50.02,
          "temp_min": 50.02,
          "temp_max": 50.02,
          "pressure": 1024.17,
          "sea_level": 1024.17,
          "grnd_level": 999.69,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 7.96,
          "deg": 38.0014
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 03:00:00"
      },
      {
        "dt": 1554184800,
        "main": {
          "temp": 43.73,
          "temp_min": 43.73,
          "temp_max": 43.73,
          "pressure": 1025.8,
          "sea_level": 1025.8,
          "grnd_level": 1000.99,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.19,
          "deg": 34.0006
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 06:00:00"
      },
      {
        "dt": 1554195600,
        "main": {
          "temp": 36.8,
          "temp_min": 36.8,
          "temp_max": 36.8,
          "pressure": 1025.52,
          "sea_level": 1025.52,
          "grnd_level": 1000.55,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.91,
          "deg": 40.0063
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 09:00:00"
      },
      {
        "dt": 1554206400,
        "main": {
          "temp": 33.18,
          "temp_min": 33.18,
          "temp_max": 33.18,
          "pressure": 1025.22,
          "sea_level": 1025.22,
          "grnd_level": 1000.07,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.86,
          "deg": 73.5005
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 12:00:00"
      },
      {
        "dt": 1554217200,
        "main": {
          "temp": 53.24,
          "temp_min": 53.24,
          "temp_max": 53.24,
          "pressure": 1025.6,
          "sea_level": 1025.6,
          "grnd_level": 1001.15,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.52,
          "deg": 126.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 15:00:00"
      },
      {
        "dt": 1554228000,
        "main": {
          "temp": 65.99,
          "temp_min": 65.99,
          "temp_max": 65.99,
          "pressure": 1024.3,
          "sea_level": 1024.3,
          "grnd_level": 1000.55,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.39,
          "deg": 183
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 18:00:00"
      },
      {
        "dt": 1554238800,
        "main": {
          "temp": 70.96,
          "temp_min": 70.96,
          "temp_max": 70.96,
          "pressure": 1020.87,
          "sea_level": 1020.87,
          "grnd_level": 997.36,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 7.96,
          "deg": 166
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 21:00:00"
      },
      {
        "dt": 1554249600,
        "main": {
          "temp": 69.66,
          "temp_min": 69.66,
          "temp_max": 69.66,
          "pressure": 1019.53,
          "sea_level": 1019.53,
          "grnd_level": 995.97,
          "humidity": 33,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 8.66,
          "deg": 152.504
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 00:00:00"
      },
      {
        "dt": 1554260400,
        "main": {
          "temp": 60.38,
          "temp_min": 60.38,
          "temp_max": 60.38,
          "pressure": 1020.78,
          "sea_level": 1020.78,
          "grnd_level": 996.73,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 12.19,
          "deg": 152.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 03:00:00"
      },
      {
        "dt": 1554271200,
        "main": {
          "temp": 56.14,
          "temp_min": 56.14,
          "temp_max": 56.14,
          "pressure": 1022.03,
          "sea_level": 1022.03,
          "grnd_level": 997.89,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 13.35,
          "deg": 170
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 06:00:00"
      },
      {
        "dt": 1554282000,
        "main": {
          "temp": 51.69,
          "temp_min": 51.69,
          "temp_max": 51.69,
          "pressure": 1021.05,
          "sea_level": 1021.05,
          "grnd_level": 996.85,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 8.21,
          "deg": 160.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 09:00:00"
      },
      {
        "dt": 1554292800,
        "main": {
          "temp": 50.66,
          "temp_min": 50.66,
          "temp_max": 50.66,
          "pressure": 1020.65,
          "sea_level": 1020.65,
          "grnd_level": 996.42,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 6.04,
          "deg": 136.51
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 12:00:00"
      },
      {
        "dt": 1554303600,
        "main": {
          "temp": 57.2,
          "temp_min": 57.2,
          "temp_max": 57.2,
          "pressure": 1021.07,
          "sea_level": 1021.07,
          "grnd_level": 997.09,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 7.43,
          "deg": 133.501
        },
        "rain": {
          "3h": 0.16
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 15:00:00"
      },
      {
        "dt": 1554314400,
        "main": {
          "temp": 68.34,
          "temp_min": 68.34,
          "temp_max": 68.34,
          "pressure": 1020.32,
          "sea_level": 1020.32,
          "grnd_level": 996.62,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 15.01,
          "deg": 159.504
        },
        "rain": {
          "3h": 0.22
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 18:00:00"
      },
      {
        "dt": 1554325200,
        "main": {
          "temp": 64.37,
          "temp_min": 64.37,
          "temp_max": 64.37,
          "pressure": 1018.32,
          "sea_level": 1018.32,
          "grnd_level": 994.81,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 13,
          "deg": 162
        },
        "rain": {
          "3h": 1.08
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 21:00:00"
      },
      {
        "dt": 1554336000,
        "main": {
          "temp": 63.83,
          "temp_min": 63.83,
          "temp_max": 63.83,
          "pressure": 1017.02,
          "sea_level": 1017.02,
          "grnd_level": 993.48,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 13,
          "deg": 156.501
        },
        "rain": {
          "3h": 0.69
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 00:00:00"
      },
      {
        "dt": 1554346800,
        "main": {
          "temp": 62.12,
          "temp_min": 62.12,
          "temp_max": 62.12,
          "pressure": 1018.13,
          "sea_level": 1018.13,
          "grnd_level": 994.34,
          "humidity": 94,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 11.21,
          "deg": 157.504
        },
        "rain": {
          "3h": 1.13
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 03:00:00"
      },
      {
        "dt": 1554357600,
        "main": {
          "temp": 62.04,
          "temp_min": 62.04,
          "temp_max": 62.04,
          "pressure": 1018.4,
          "sea_level": 1018.4,
          "grnd_level": 994.68,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 9.64,
          "deg": 155.001
        },
        "rain": {
          "3h": 0.84
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 06:00:00"
      },
      {
        "dt": 1554368400,
        "main": {
          "temp": 62.61,
          "temp_min": 62.61,
          "temp_max": 62.61,
          "pressure": 1016.9,
          "sea_level": 1016.9,
          "grnd_level": 993.19,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 9.17,
          "deg": 155.501
        },
        "rain": {
          "3h": 0.32
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 09:00:00"
      },
      {
        "dt": 1554379200,
        "main": {
          "temp": 63.75,
          "temp_min": 63.75,
          "temp_max": 63.75,
          "pressure": 1016.29,
          "sea_level": 1016.29,
          "grnd_level": 992.63,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 10.54,
          "deg": 178.5
        },
        "rain": {
          "3h": 0.21
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 12:00:00"
      },
      {
        "dt": 1554390000,
        "main": {
          "temp": 69.66,
          "temp_min": 69.66,
          "temp_max": 69.66,
          "pressure": 1017.44,
          "sea_level": 1017.44,
          "grnd_level": 993.86,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 10.76,
          "deg": 209.002
        },
        "rain": {
          "3h": 0.09
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-04 15:00:00"
      }
    ],
    "city": {
      "id": 4671654,
      "name": "Austin",
      "coord": {
        "lat": 30.2672,
        "lon": -97.7431
      },
      "country": "US"
    }
  },
  "4930956": {
    "cod": "200",
    "message": 0.0409,
    "cnt": 40,
    "list": [
      {
        "dt": 1553968800,
        "main": {
          "temp": 56.93,
          "temp_min": 47.82,
          "temp_max": 56.93,
          "pressure": 1019.73,
          "sea_level": 1019.73,
          "grnd_level": 1018.4,
          "humidity": 79,
          "temp_kf": 5.06
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 6.64,
          "deg": 114.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 18:00:00"
      },
      {
        "dt": 1553979600,
        "main": {
          "temp": 58.26,
          "temp_min": 51.43,
          "temp_max": 58.26,
          "pressure": 1016.83,
          "sea_level": 1016.83,
          "grnd_level": 1015.15,
          "humidity": 70,
          "temp_kf": 3.8
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 11.74,
          "deg": 155.005
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 21:00:00"
      },
      {
        "dt": 1553990400,
        "main": {
          "temp": 57.13,
          "temp_min": 52.57,
          "temp_max": 57.13,
          "pressure": 1015.78,
          "sea_level": 1015.78,
          "grnd_level": 1014.24,
          "humidity": 68,
          "temp_kf": 2.53
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 14.79,
          "deg": 177.003
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 00:00:00"
      },
      {
        "dt": 1554001200,
        "main": {
          "temp": 54.03,
          "temp_min": 51.76,
          "temp_max": 54.03,
          "pressure": 1014.8,
          "sea_level": 1014.8,
          "grnd_level": 1013.17,
          "humidity": 70,
          "temp_kf": 1.27
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 14.23,
          "deg": 183.503
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 03:00:00"
      },
      {
        "dt": 1554012000,
        "main": {
          "temp": 51.57,
          "temp_min": 51.57,
          "temp_max": 51.57,
          "pressure": 1013.02,
          "sea_level": 1013.02,
          "grnd_level": 1011.49,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 14.2,
          "deg": 180.003
        },
        "rain": {
          "3h": 0.005
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 06:00:00"
      },
      {
        "dt": 1554022800,
        "main": {
          "temp": 51.36,
          "temp_min": 51.36,
          "temp_max": 51.36,
          "pressure": 1011.32,
          "sea_level": 1011.32,
          "grnd_level": 1009.8,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 14.76,
          "deg": 179.003
        },
        "rain": {
          "3h": 0.09
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 09:00:00"
      },
      {
        "dt": 1554033600,
        "main": {
          "temp": 51.9,
          "temp_min": 51.9,
          "temp_max": 51.9,
          "pressure": 1010.23,
          "sea_level": 1010.23,
          "grnd_level": 1008.67,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 15.01,
          "deg": 178.503
        },
        "rain": {
          "3h": 0.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 12:00:00"
      },
      {
        "dt": 1554044400,
        "main": {
          "temp": 55.62,
          "temp_min": 55.62,
          "temp_max": 55.62,
          "pressure": 1007.7,
          "sea_level": 1007.7,
          "grnd_level": 1006.21,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 17.02,
          "deg": 176.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 15:00:00"
      },
      {
        "dt": 1554055200,
        "main": {
          "temp": 57.8,
          "temp_min": 57.8,
          "temp_max": 57.8,
          "pressure": 1003.94,
          "sea_level": 1003.94,
          "grnd_level": 1002.36,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 18.59,
          "deg": 182.003
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 18:00:00"
      },
      {
        "dt": 1554066000,
        "main": {
          "temp": 53.44,
          "temp_min": 53.44,
          "temp_max": 53.44,
          "pressure": 1002.28,
          "sea_level": 1002.28,
          "grnd_level": 1000.71,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 13.8,
          "deg": 197.003
        },
        "rain": {
          "3h": 0.465
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 21:00:00"
      },
      {
        "dt": 1554076800,
        "main": {
          "temp": 48.79,
          "temp_min": 48.79,
          "temp_max": 48.79,
          "pressure": 1002.37,
          "sea_level": 1002.37,
          "grnd_level": 1000.73,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 8.75,
          "deg": 244.001
        },
        "rain": {
          "3h": 2.25
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 00:00:00"
      },
      {
        "dt": 1554087600,
        "main": {
          "temp": 41.64,
          "temp_min": 41.64,
          "temp_max": 41.64,
          "pressure": 1004.13,
          "sea_level": 1004.13,
          "grnd_level": 1002.52,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 14.99,
          "deg": 306
        },
        "rain": {
          "3h": 1.53
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 03:00:00"
      },
      {
        "dt": 1554098400,
        "main": {
          "temp": 39.44,
          "temp_min": 39.44,
          "temp_max": 39.44,
          "pressure": 1005.97,
          "sea_level": 1005.97,
          "grnd_level": 1004.5,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 13.78,
          "deg": 311.003
        },
        "rain": {
          "3h": 0.39
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 06:00:00"
      },
      {
        "dt": 1554109200,
        "main": {
          "temp": 36.74,
          "temp_min": 36.74,
          "temp_max": 36.74,
          "pressure": 1008.2,
          "sea_level": 1008.2,
          "grnd_level": 1006.8,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 15.57,
          "deg": 304.5
        },
        "rain": {
          "3h": 0.06
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 09:00:00"
      },
      {
        "dt": 1554120000,
        "main": {
          "temp": 35.45,
          "temp_min": 35.45,
          "temp_max": 35.45,
          "pressure": 1011.28,
          "sea_level": 1011.28,
          "grnd_level": 1009.81,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 16.96,
          "deg": 299.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 12:00:00"
      },
      {
        "dt": 1554130800,
        "main": {
          "temp": 37.18,
          "temp_min": 37.18,
          "temp_max": 37.18,
          "pressure": 1013.53,
          "sea_level": 1013.53,
          "grnd_level": 1011.96,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 17.81,
          "deg": 295.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 15:00:00"
      },
      {
        "dt": 1554141600,
        "main": {
          "temp": 39.03,
          "temp_min": 39.03,
          "temp_max": 39.03,
          "pressure": 1015.42,
          "sea_level": 1015.42,
          "grnd_level": 1013.75,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 18.63,
          "deg": 292.002
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 18:00:00"
      },
      {
        "dt": 1554152400,
        "main": {
          "temp": 38.6,
          "temp_min": 38.6,
          "temp_max": 38.6,
          "pressure": 1018.49,
          "sea_level": 1018.49,
          "grnd_level": 1016.87,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 18.84,
          "deg": 299.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 21:00:00"
      },
      {
        "dt": 1554163200,
        "main": {
          "temp": 36.54,
          "temp_min": 36.54,
          "temp_max": 36.54,
          "pressure": 1022.83,
          "sea_level": 1022.83,
          "grnd_level": 1021.2,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 13.76,
          "deg": 305.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 00:00:00"
      },
      {
        "dt": 1554174000,
        "main": {
          "temp": 34,
          "temp_min": 34,
          "temp_max": 34,
          "pressure": 1026.09,
          "sea_level": 1026.09,
          "grnd_level": 1024.57,
          "humidity": 94,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.63,
          "deg": 290.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 03:00:00"
      },
      {
        "dt": 1554184800,
        "main": {
          "temp": 31.31,
          "temp_min": 31.31,
          "temp_max": 31.31,
          "pressure": 1027.8,
          "sea_level": 1027.8,
          "grnd_level": 1026.27,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.4,
          "deg": 261.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 06:00:00"
      },
      {
        "dt": 1554195600,
        "main": {
          "temp": 29.96,
          "temp_min": 29.96,
          "temp_max": 29.96,
          "pressure": 1029.2,
          "sea_level": 1029.2,
          "grnd_level": 1027.67,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.27,
          "deg": 249.006
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 09:00:00"
      },
      {
        "dt": 1554206400,
        "main": {
          "temp": 33,
          "temp_min": 33,
          "temp_max": 33,
          "pressure": 1030.06,
          "sea_level": 1030.06,
          "grnd_level": 1028.47,
          "humidity": 98,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.34,
          "deg": 229.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 12:00:00"
      },
      {
        "dt": 1554217200,
        "main": {
          "temp": 40.64,
          "temp_min": 40.64,
          "temp_max": 40.64,
          "pressure": 1030.76,
          "sea_level": 1030.76,
          "grnd_level": 1029.31,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.66,
          "deg": 188.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 15:00:00"
      },
      {
        "dt": 1554228000,
        "main": {
          "temp": 44.75,
          "temp_min": 44.75,
          "temp_max": 44.75,
          "pressure": 1029.1,
          "sea_level": 1029.1,
          "grnd_level": 1027.59,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 12.53,
          "deg": 178.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 18:00:00"
      },
      {
        "dt": 1554238800,
        "main": {
          "temp": 45.4,
          "temp_min": 45.4,
          "temp_max": 45.4,
          "pressure": 1027.55,
          "sea_level": 1027.55,
          "grnd_level": 1026,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 13.44,
          "deg": 181.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 21:00:00"
      },
      {
        "dt": 1554249600,
        "main": {
          "temp": 41.49,
          "temp_min": 41.49,
          "temp_max": 41.49,
          "pressure": 1028.09,
          "sea_level": 1028.09,
          "grnd_level": 1026.61,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 13.91,
          "deg": 181.004
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 00:00:00"
      },
      {
        "dt": 1554260400,
        "main": {
          "temp": 38.06,
          "temp_min": 38.06,
          "temp_max": 38.06,
          "pressure": 1028.18,
          "sea_level": 1028.18,
          "grnd_level": 1026.57,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 11.74,
          "deg": 185.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 03:00:00"
      },
      {
        "dt": 1554271200,
        "main": {
          "temp": 35.89,
          "temp_min": 35.89,
          "temp_max": 35.89,
          "pressure": 1027.75,
          "sea_level": 1027.75,
          "grnd_level": 1026.12,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.22,
          "deg": 190.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 06:00:00"
      },
      {
        "dt": 1554282000,
        "main": {
          "temp": 33.69,
          "temp_min": 33.69,
          "temp_max": 33.69,
          "pressure": 1026.33,
          "sea_level": 1026.33,
          "grnd_level": 1024.69,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.19,
          "deg": 166.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 09:00:00"
      },
      {
        "dt": 1554292800,
        "main": {
          "temp": 36.44,
          "temp_min": 36.44,
          "temp_max": 36.44,
          "pressure": 1026.13,
          "sea_level": 1026.13,
          "grnd_level": 1024.5,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.13,
          "deg": 144.01
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 12:00:00"
      },
      {
        "dt": 1554303600,
        "main": {
          "temp": 43.79,
          "temp_min": 43.79,
          "temp_max": 43.79,
          "pressure": 1025.43,
          "sea_level": 1025.43,
          "grnd_level": 1023.89,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.84,
          "deg": 151.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 15:00:00"
      },
      {
        "dt": 1554314400,
        "main": {
          "temp": 47.28,
          "temp_min": 47.28,
          "temp_max": 47.28,
          "pressure": 1023.04,
          "sea_level": 1023.04,
          "grnd_level": 1021.5,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.16,
          "deg": 168.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 18:00:00"
      },
      {
        "dt": 1554325200,
        "main": {
          "temp": 49.07,
          "temp_min": 49.07,
          "temp_max": 49.07,
          "pressure": 1021.36,
          "sea_level": 1021.36,
          "grnd_level": 1019.85,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.59,
          "deg": 191.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 21:00:00"
      },
      {
        "dt": 1554336000,
        "main": {
          "temp": 46.46,
          "temp_min": 46.46,
          "temp_max": 46.46,
          "pressure": 1023.06,
          "sea_level": 1023.06,
          "grnd_level": 1021.48,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.15,
          "deg": 285.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 00:00:00"
      },
      {
        "dt": 1554346800,
        "main": {
          "temp": 44.84,
          "temp_min": 44.84,
          "temp_max": 44.84,
          "pressure": 1025.17,
          "sea_level": 1025.17,
          "grnd_level": 1023.62,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.63,
          "deg": 328.504
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 03:00:00"
      },
      {
        "dt": 1554357600,
        "main": {
          "temp": 41.07,
          "temp_min": 41.07,
          "temp_max": 41.07,
          "pressure": 1026.48,
          "sea_level": 1026.48,
          "grnd_level": 1024.92,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.73,
          "deg": 346.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 06:00:00"
      },
      {
        "dt": 1554368400,
        "main": {
          "temp": 37.59,
          "temp_min": 37.59,
          "temp_max": 37.59,
          "pressure": 1027.74,
          "sea_level": 1027.74,
          "grnd_level": 1026.15,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.13,
          "deg": 300.501
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 09:00:00"
      },
      {
        "dt": 1554379200,
        "main": {
          "temp": 40.71,
          "temp_min": 40.71,
          "temp_max": 40.71,
          "pressure": 1029.41,
          "sea_level": 1029.41,
          "grnd_level": 1027.83,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.38,
          "deg": 192
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-04 12:00:00"
      },
      {
        "dt": 1554390000,
        "main": {
          "temp": 48.33,
          "temp_min": 48.33,
          "temp_max": 48.33,
          "pressure": 1030,
          "sea_level": 1030,
          "grnd_level": 1028.42,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.73,
          "deg": 176.002
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-04 15:00:00"
      }
    ],
    "city": {
      "id": 4930956,
      "name": "Boston",
      "coord": {
        "lat": 42.3584,
        "lon": -71.0598
      },
      "country": "US"
    }
  },
  "4887398": {
    "cod": "200",
    "message": 0.0091,
    "cnt": 40,
    "list": [
      {
        "dt": 1553968800,
        "main": {
          "temp": 39.76,
          "temp_min": 36.66,
          "temp_max": 39.76,
          "pressure": 1013.61,
          "sea_level": 1013.61,
          "grnd_level": 991.12,
          "humidity": 97,
          "temp_kf": 1.72
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 13.69,
          "deg": 345.502
        },
        "rain": {
          "3h": 1.22
        },
        "snow": {
          "3h": 0.12
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 18:00:00"
      },
      {
        "dt": 1553979600,
        "main": {
          "temp": 37.36,
          "temp_min": 35.05,
          "temp_max": 37.36,
          "pressure": 1014.19,
          "sea_level": 1014.19,
          "grnd_level": 991.79,
          "humidity": 100,
          "temp_kf": 1.29
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 21.03,
          "deg": 6.00549
        },
        "rain": {
          "3h": 0.2
        },
        "snow": {
          "3h": 0.0335
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-30 21:00:00"
      },
      {
        "dt": 1553990400,
        "main": {
          "temp": 35.49,
          "temp_min": 33.94,
          "temp_max": 35.49,
          "pressure": 1017.34,
          "sea_level": 1017.34,
          "grnd_level": 994.56,
          "humidity": 100,
          "temp_kf": 0.86
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 18.81,
          "deg": 2.00272
        },
        "rain": {
          "3h": 0.12
        },
        "snow": {
          "3h": 0.062
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 00:00:00"
      },
      {
        "dt": 1554001200,
        "main": {
          "temp": 33.8,
          "temp_min": 33.04,
          "temp_max": 33.8,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 996.85,
          "humidity": 100,
          "temp_kf": 0.43
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 18.14,
          "deg": 354.503
        },
        "rain": {},
        "snow": {
          "3h": 0.0915
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 03:00:00"
      },
      {
        "dt": 1554012000,
        "main": {
          "temp": 29.25,
          "temp_min": 29.25,
          "temp_max": 29.25,
          "pressure": 1022.3,
          "sea_level": 1022.3,
          "grnd_level": 999.01,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 20.62,
          "deg": 335.003
        },
        "rain": {},
        "snow": {
          "3h": 0.033
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 06:00:00"
      },
      {
        "dt": 1554022800,
        "main": {
          "temp": 26.07,
          "temp_min": 26.07,
          "temp_max": 26.07,
          "pressure": 1024.32,
          "sea_level": 1024.32,
          "grnd_level": 1000.84,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 19.46,
          "deg": 336.503
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-03-31 09:00:00"
      },
      {
        "dt": 1554033600,
        "main": {
          "temp": 25.53,
          "temp_min": 25.53,
          "temp_max": 25.53,
          "pressure": 1026.39,
          "sea_level": 1026.39,
          "grnd_level": 1002.67,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 18.37,
          "deg": 333.003
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 12:00:00"
      },
      {
        "dt": 1554044400,
        "main": {
          "temp": 28.35,
          "temp_min": 28.35,
          "temp_max": 28.35,
          "pressure": 1027.7,
          "sea_level": 1027.7,
          "grnd_level": 1004.29,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 16.8,
          "deg": 329.502
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 15:00:00"
      },
      {
        "dt": 1554055200,
        "main": {
          "temp": 31.7,
          "temp_min": 31.7,
          "temp_max": 31.7,
          "pressure": 1027.54,
          "sea_level": 1027.54,
          "grnd_level": 1004.36,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 14.23,
          "deg": 332.003
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 18:00:00"
      },
      {
        "dt": 1554066000,
        "main": {
          "temp": 34.45,
          "temp_min": 34.45,
          "temp_max": 34.45,
          "pressure": 1026.64,
          "sea_level": 1026.64,
          "grnd_level": 1003.51,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 10.67,
          "deg": 326.003
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-03-31 21:00:00"
      },
      {
        "dt": 1554076800,
        "main": {
          "temp": 35.2,
          "temp_min": 35.2,
          "temp_max": 35.2,
          "pressure": 1026.97,
          "sea_level": 1026.97,
          "grnd_level": 1003.69,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 9.19,
          "deg": 316.001
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 00:00:00"
      },
      {
        "dt": 1554087600,
        "main": {
          "temp": 32.1,
          "temp_min": 32.1,
          "temp_max": 32.1,
          "pressure": 1028.21,
          "sea_level": 1028.21,
          "grnd_level": 1004.76,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.15,
          "deg": 311.5
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 03:00:00"
      },
      {
        "dt": 1554098400,
        "main": {
          "temp": 30.26,
          "temp_min": 30.26,
          "temp_max": 30.26,
          "pressure": 1028.53,
          "sea_level": 1028.53,
          "grnd_level": 1004.9,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.16,
          "deg": 229.503
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 06:00:00"
      },
      {
        "dt": 1554109200,
        "main": {
          "temp": 29.18,
          "temp_min": 29.18,
          "temp_max": 29.18,
          "pressure": 1027.96,
          "sea_level": 1027.96,
          "grnd_level": 1004.24,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.63,
          "deg": 228.5
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-01 09:00:00"
      },
      {
        "dt": 1554120000,
        "main": {
          "temp": 28.34,
          "temp_min": 28.34,
          "temp_max": 28.34,
          "pressure": 1027.68,
          "sea_level": 1027.68,
          "grnd_level": 1003.97,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.49,
          "deg": 224.001
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 12:00:00"
      },
      {
        "dt": 1554130800,
        "main": {
          "temp": 35.11,
          "temp_min": 35.11,
          "temp_max": 35.11,
          "pressure": 1027.01,
          "sea_level": 1027.01,
          "grnd_level": 1003.8,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 9.42,
          "deg": 214
        },
        "rain": {},
        "snow": {
          "3h": 0.002
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 15:00:00"
      },
      {
        "dt": 1554141600,
        "main": {
          "temp": 40.47,
          "temp_min": 40.47,
          "temp_max": 40.47,
          "pressure": 1024.46,
          "sea_level": 1024.46,
          "grnd_level": 1001.51,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 14.16,
          "deg": 206.002
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 18:00:00"
      },
      {
        "dt": 1554152400,
        "main": {
          "temp": 42.2,
          "temp_min": 42.2,
          "temp_max": 42.2,
          "pressure": 1021.29,
          "sea_level": 1021.29,
          "grnd_level": 998.47,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 16.87,
          "deg": 216.501
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-01 21:00:00"
      },
      {
        "dt": 1554163200,
        "main": {
          "temp": 42.03,
          "temp_min": 42.03,
          "temp_max": 42.03,
          "pressure": 1020.15,
          "sea_level": 1020.15,
          "grnd_level": 997.36,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 15.77,
          "deg": 221.001
        },
        "rain": {
          "3h": 0.07
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 00:00:00"
      },
      {
        "dt": 1554174000,
        "main": {
          "temp": 42.1,
          "temp_min": 42.1,
          "temp_max": 42.1,
          "pressure": 1020.37,
          "sea_level": 1020.37,
          "grnd_level": 997.45,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 13.78,
          "deg": 223.501
        },
        "rain": {
          "3h": 0.050000000000001
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 03:00:00"
      },
      {
        "dt": 1554184800,
        "main": {
          "temp": 42.02,
          "temp_min": 42.02,
          "temp_max": 42.02,
          "pressure": 1019.52,
          "sea_level": 1019.52,
          "grnd_level": 996.51,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 14.45,
          "deg": 216.001
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 06:00:00"
      },
      {
        "dt": 1554195600,
        "main": {
          "temp": 41.48,
          "temp_min": 41.48,
          "temp_max": 41.48,
          "pressure": 1018.24,
          "sea_level": 1018.24,
          "grnd_level": 995.11,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 14.76,
          "deg": 219.006
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-02 09:00:00"
      },
      {
        "dt": 1554206400,
        "main": {
          "temp": 40.83,
          "temp_min": 40.83,
          "temp_max": 40.83,
          "pressure": 1017.82,
          "sea_level": 1017.82,
          "grnd_level": 994.63,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 14.27,
          "deg": 222.001
        },
        "rain": {
          "3h": 0.0099999999999998
        },
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 12:00:00"
      },
      {
        "dt": 1554217200,
        "main": {
          "temp": 42.08,
          "temp_min": 42.08,
          "temp_max": 42.08,
          "pressure": 1016.92,
          "sea_level": 1016.92,
          "grnd_level": 994.19,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 13.8,
          "deg": 216.501
        },
        "rain": {
          "3h": 0.02
        },
        "snow": {
          "3h": 0.0005
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 15:00:00"
      },
      {
        "dt": 1554228000,
        "main": {
          "temp": 44.03,
          "temp_min": 44.03,
          "temp_max": 44.03,
          "pressure": 1016.5,
          "sea_level": 1016.5,
          "grnd_level": 993.83,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 12.53,
          "deg": 226
        },
        "rain": {
          "3h": 0.06
        },
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 18:00:00"
      },
      {
        "dt": 1554238800,
        "main": {
          "temp": 43.06,
          "temp_min": 43.06,
          "temp_max": 43.06,
          "pressure": 1016.47,
          "sea_level": 1016.47,
          "grnd_level": 994,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 10.2,
          "deg": 242
        },
        "rain": {
          "3h": 0.55
        },
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-02 21:00:00"
      },
      {
        "dt": 1554249600,
        "main": {
          "temp": 43.47,
          "temp_min": 43.47,
          "temp_max": 43.47,
          "pressure": 1017.57,
          "sea_level": 1017.57,
          "grnd_level": 995.09,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.1,
          "deg": 245.004
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 00:00:00"
      },
      {
        "dt": 1554260400,
        "main": {
          "temp": 41.03,
          "temp_min": 41.03,
          "temp_max": 41.03,
          "pressure": 1020.14,
          "sea_level": 1020.14,
          "grnd_level": 997.37,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.73,
          "deg": 252.501
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 03:00:00"
      },
      {
        "dt": 1554271200,
        "main": {
          "temp": 39.22,
          "temp_min": 39.22,
          "temp_max": 39.22,
          "pressure": 1021.83,
          "sea_level": 1021.83,
          "grnd_level": 998.77,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.78,
          "deg": 253.5
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 06:00:00"
      },
      {
        "dt": 1554282000,
        "main": {
          "temp": 37.56,
          "temp_min": 37.56,
          "temp_max": 37.56,
          "pressure": 1023.49,
          "sea_level": 1023.49,
          "grnd_level": 1000.29,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.55,
          "deg": 262.501
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-03 09:00:00"
      },
      {
        "dt": 1554292800,
        "main": {
          "temp": 35.36,
          "temp_min": 35.36,
          "temp_max": 35.36,
          "pressure": 1025.25,
          "sea_level": 1025.25,
          "grnd_level": 1001.94,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.91,
          "deg": 296.01
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 12:00:00"
      },
      {
        "dt": 1554303600,
        "main": {
          "temp": 40.55,
          "temp_min": 40.55,
          "temp_max": 40.55,
          "pressure": 1025.83,
          "sea_level": 1025.83,
          "grnd_level": 1003.09,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 3.96,
          "deg": 145.501
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 15:00:00"
      },
      {
        "dt": 1554314400,
        "main": {
          "temp": 44.49,
          "temp_min": 44.49,
          "temp_max": 44.49,
          "pressure": 1024.52,
          "sea_level": 1024.52,
          "grnd_level": 1001.98,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 7.63,
          "deg": 148.504
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 18:00:00"
      },
      {
        "dt": 1554325200,
        "main": {
          "temp": 46.55,
          "temp_min": 46.55,
          "temp_max": 46.55,
          "pressure": 1022.4,
          "sea_level": 1022.4,
          "grnd_level": 999.93,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 6.4,
          "deg": 159
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-03 21:00:00"
      },
      {
        "dt": 1554336000,
        "main": {
          "temp": 46.28,
          "temp_min": 46.28,
          "temp_max": 46.28,
          "pressure": 1021.34,
          "sea_level": 1021.34,
          "grnd_level": 998.84,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 5.39,
          "deg": 127.001
        },
        "rain": {
          "3h": 0.059999999999999
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 00:00:00"
      },
      {
        "dt": 1554346800,
        "main": {
          "temp": 44.66,
          "temp_min": 44.66,
          "temp_max": 44.66,
          "pressure": 1021.17,
          "sea_level": 1021.17,
          "grnd_level": 998.58,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 8.19,
          "deg": 114.504
        },
        "rain": {
          "3h": 0.59
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 03:00:00"
      },
      {
        "dt": 1554357600,
        "main": {
          "temp": 44.4,
          "temp_min": 44.4,
          "temp_max": 44.4,
          "pressure": 1020.04,
          "sea_level": 1020.04,
          "grnd_level": 997.4,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 8.75,
          "deg": 151.501
        },
        "rain": {
          "3h": 1.04
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 06:00:00"
      },
      {
        "dt": 1554368400,
        "main": {
          "temp": 44.61,
          "temp_min": 44.61,
          "temp_max": 44.61,
          "pressure": 1018.66,
          "sea_level": 1018.66,
          "grnd_level": 995.91,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 9.95,
          "deg": 157.501
        },
        "rain": {
          "3h": 0.43
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2019-04-04 09:00:00"
      },
      {
        "dt": 1554379200,
        "main": {
          "temp": 43.68,
          "temp_min": 43.68,
          "temp_max": 43.68,
          "pressure": 1018.05,
          "sea_level": 1018.05,
          "grnd_level": 995.35,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 8.63,
          "deg": 165.5
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-04 12:00:00"
      },
      {
        "dt": 1554390000,
        "main": {
          "temp": 45.27,
          "temp_min": 45.27,
          "temp_max": 45.27,
          "pressure": 1017.2,
          "sea_level": 1017.2,
          "grnd_level": 994.66,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 8.97,
          "deg": 165.002
        },
        "rain": {},
        "snow": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-04-04 15:00:00"
      }
    ],
    "city": {
      "id": 4887398,
      "name": "Chicago",
      "coord": {
        "lat": 41.85,
        "lon": -87.6501
      },
      "country": "US"
    }
  }
};
