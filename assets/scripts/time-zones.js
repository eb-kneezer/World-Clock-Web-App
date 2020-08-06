let time_zones = [
    {
      "id": 1,
      "city": "Tokyo–Yokohama",
      "country": "Japan",
      "utc": 9
    },
    {
      "id": 2,
      "city": "Jakarta (Jabodetabek)",
      "country": "Indonesia",
      "utc": 9
    },
    {
      "id": 3,
      "city": "Delhi",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 4,
      "city": "Manila (Metro Manila)",
      "country": "Philippines",
      "utc": 8
    },
    {
      "id": 5,
      "city": "Seoul–Gyeonggi–Incheon (Sudogwon)",
      "country": "South Korea",
      "utc": 9
    },
    {
      "id": 6,
      "city": "Shanghai",
      "country": "China",
      "utc": 8
    },
    {
      "id": 7,
      "city": "Karachi",
      "country": "Pakistan",
      "utc": 5
    },
    {
      "id": 8,
      "city": "Beijing",
      "country": "China",
      "utc": 8
    },
    {
      "id": 9,
      "city": "New York City",
      "country": "United States of America",
      "utc": -4
    },
    {
      "id": 10,
      "city": "Guangzhou–Foshan (Guangfo)",
      "country": "China",
      "utc": 8
    },
    {
      "id": 11,
      "city": "São Paulo",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 12,
      "city": "Mexico City (Valley of Mexico)",
      "country": "Mexico",
      "utc": -5
    },
    {
      "id": 13,
      "city": "Mumbai",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 14,
      "city": "Osaka–Kobe–Kyoto (Keihanshin)",
      "country": "Japan",
      "utc": 9
    },
    {
      "id": 15,
      "city": "Moscow",
      "country": "Russia",
      "utc": 3
    },
    {
      "id": 16,
      "city": "Dhaka",
      "country": "Bangladesh",
      "utc": 6
    },
    {
      "id": 17,
      "city": "Greater Cairo",
      "country": "Egypt",
      "utc": 2
    },
    {
      "id": 18,
      "city": "Los Angeles",
      "country": "United States of America",
      "utc": -7
    },
    {
      "id": 19,
      "city": "Bangkok",
      "country": "Thailand",
      "utc": 7
    },
    {
      "id": 20,
      "city": "Kolkata",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 21,
      "city": "Buenos Aires",
      "country": "Argentina",
      "utc": -3
    },
    {
      "id": 23,
      "city": "Tehran",
      "country": "Iran",
      "utc": 3.5
    },
    {
      "id": 23,
      "city": "Istanbul",
      "country": "Turkey",
      "utc": 3
    },
    {
      "id": 24,
      "city": "Lagos",
      "country": "Nigeria",
      "utc": 1
    },
    {
      "id": 25,
      "city": "Shenzhen",
      "country": "China",
      "utc": 8
    },
    {
      "id": 26,
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 27,
      "city": "Kinshasa",
      "country": "Democratic Republic of the Congo",
      "utc": 1
    },
    {
      "id": 28,
      "city": "Tianjin",
      "country": "China",
      "utc": 8
    },
    {
      "id": 29,
      "city": "Paris",
      "country": "France",
      "utc": 1
    },
    {
      "id": 30,
      "city": "Lima",
      "country": "Peru",
      "utc": -5
    },
    {
      "id": 31,
      "city": "Chengdu",
      "country": "China",
      "utc": 8
    },
    {
      "id": 32,
      "city": "London",
      "country": "United Kingdom",
      "utc": 0
    },
    {
      "id": 33,
      "city": "Nagoya",
      "country": "Japan",
      "utc": 9
    },
    {
      "id": 34,
      "city": "Lahore",
      "country": "Pakistan",
      "utc": 5
    },
    {
      "id": 35,
      "city": "Chennai",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 36,
      "city": "Chicago",
      "country": "United States of America",
      "utc": -5
    },
    {
      "id": 37,
      "city": "Bogotá",
      "country": "Colombia",
      "utc": -5
    },
    {
      "id": 38,
      "city": "Ho Chi Minh City (Saigon)",
      "country": "Vietnam",
      "utc": 7
    },
    {
      "id": 39,
      "city": "Hyderabad",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 41,
      "city": "Bengaluru",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 41,
      "city": "Dongguan",
      "country": "China",
      "utc": 8
    },
    {
      "id": 42,
      "city": "Johannesburg–East Rand",
      "country": "South Africa",
      "utc": 2
    },
    {
      "id": 43,
      "city": "Wuhan",
      "country": "China",
      "utc": 8
    },
    {
      "id": 44,
      "city": "Taipei",
      "country": "Taiwan",
      "utc": 8
    },
    {
      "id": 45,
      "city": "Hangzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 46,
      "city": "Hong Kong",
      "country": "China",
      "utc": 8
    },
    {
      "id": 47,
      "city": "Chongqing",
      "country": "China",
      "utc": 8
    },
    {
      "id": 48,
      "city": "Ahmedabad",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 49,
      "city": "Kuala Lumpur (Klang Valley)",
      "country": "Malaysia",
      "utc": 8
    },
    {
      "id": 50,
      "city": "Quanzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 51,
      "city": "Essen–Düsseldorf (Ruhr Area)",
      "country": "Germany",
      "utc": 1
    },
    {
      "id": 52,
      "city": "Baghdad",
      "country": "Iraq",
      "utc": 3
    },
    {
      "id": 53,
      "city": "Toronto",
      "country": "Canada",
      "utc": -4
    },
    {
      "id": 54,
      "city": "Santiago",
      "country": "Chile",
      "utc": -4
    },
    {
      "id": 55,
      "city": "Dallas–Fort Worth",
      "country": "United States of America",
      "utc": -5
    },
    {
      "id": 56,
      "city": "Madrid",
      "country": "Spain",
      "utc": 1
    },
    {
      "id": 57,
      "city": "Nanjing",
      "country": "China",
      "utc": 8
    },
    {
      "id": 58,
      "city": "Shenyang",
      "country": "China",
      "utc": 8
    },
    {
      "id": 59,
      "city": "Xi'an–Xianyang",
      "country": "China",
      "utc": 8
    },
    {
      "id": 60,
      "city": "San Francisco–San Jose",
      "country": "United States of America",
      "utc": -7
    },
    {
      "id": 61,
      "city": "Luanda",
      "country": "Angola",
      "utc": 1
    },
    {
      "id": 62,
      "city": "Qingdao–Jimo",
      "country": "China",
      "utc": 8
    },
    {
      "id": 63,
      "city": "Houston",
      "country": "United States of America",
      "utc": -5
    },
    {
      "id": 63,
      "city": "Miami",
      "country": "United States of America",
      "utc": -4
    },
    {
      "id": 65,
      "city": "Bandung",
      "country": "Indonesia",
      "utc": 7
    },
    {
      "id": 66,
      "city": "Riyadh",
      "country": "Saudi Arabia",
      "utc": 3
    },
    {
      "id": 67,
      "city": "Pune",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 68,
      "city": "Singapore",
      "country": "Singapore",
      "utc": 8
    },
    {
      "id": 69,
      "city": "Philadelphia",
      "country": "United States of America",
      "utc": -4
    },
    {
      "id": 70,
      "city": "Surat",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 71,
      "city": "Milan",
      "country": "Italy",
      "utc": 1
    },
    {
      "id": 72,
      "city": "Suzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 73,
      "city": "Saint Petersburg",
      "country": "Russia",
      "utc": 3
    },
    {
      "id": 74,
      "city": "Khartoum",
      "country": "Sudan",
      "utc": 3
    },
    {
      "id": 75,
      "city": "Atlanta",
      "country": "United States of America",
      "utc": -4
    },
    {
      "id": 76,
      "city": "Zhengzhou–Xingyang",
      "country": "China",
      "utc": 8
    },
    {
      "id": 77,
      "city": "Washington, D.C.",
      "country": "United States of America",
      "utc": -5
    },
    {
      "id": 78,
      "city": "Surabaya",
      "country": "Indonesia",
      "utc": 7
    },
    {
      "id": 79,
      "city": "Harbin",
      "country": "China",
      "utc": 8
    },
    {
      "id": 80,
      "city": "Abidjan",
      "country": "Ivory Coast",
      "utc": 0
    },
    {
      "id": 80,
      "city": "Yangon (Rangoon)",
      "country": "Myanmar",
      "utc": 6.5
    },
    {
      "id": 82,
      "city": "Nairobi",
      "country": "Kenya",
      "utc": 3
    },
    {
      "id": 83,
      "city": "Barcelona",
      "country": "Spain",
      "utc": 1
    },
    {
      "id": 84,
      "city": "Alexandria",
      "country": "Egypt",
      "utc": 2
    },
    {
      "id": 85,
      "city": "Kabul",
      "country": "Afghanistan",
      "utc": 4.5
    },
    {
      "id": 86,
      "city": "Guadalajara",
      "country": "Mexico",
      "utc": -5
    },
    {
      "id": 87,
      "city": "Ankara",
      "country": "Turkey",
      "utc": 3
    },
    {
      "id": 88,
      "city": "Belo Horizonte",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 89,
      "city": "Boston",
      "country": "United States of America",
      "utc": -4
    },
    {
      "id": 90,
      "city": "Xiamen",
      "country": "China",
      "utc": 8
    },
    {
      "id": 91,
      "city": "Kuwait City",
      "country": "Kuwait",
      "utc": 3
    },
    {
      "id": 92,
      "city": "Dar es Salaam",
      "country": "Tanzania",
      "utc": 3
    },
    {
      "id": 93,
      "city": "Phoenix",
      "country": "United States of America",
      "utc": -7
    },
    {
      "id": 94,
      "city": "Dalian",
      "country": "China",
      "utc": 8
    },
    {
      "id": 95,
      "city": "Accra",
      "country": "Ghana",
      "utc": 0
    },
    {
      "id": 96,
      "city": "Monterrey",
      "country": "Mexico",
      "utc": -5
    },
    {
      "id": 97,
      "city": "Berlin",
      "country": "Germany",
      "utc": 1
    },
    {
      "id": 98,
      "city": "Sydney",
      "country": "Australia",
      "utc": 11
    },
    {
      "id": 99,
      "city": "Fuzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 100,
      "city": "Medan",
      "country": "Indonesia",
      "utc": 7
    },
    {
      "id": 101,
      "city": "Dubai",
      "country": "United Arab Emirates",
      "utc": 4
    },
    {
      "id": 102,
      "city": "Melbourne",
      "country": "Australia",
      "utc": 11
    },
    {
      "id": 102,
      "city": "Rome",
      "country": "Italy",
      "utc": 1
    },
    {
      "id": 102,
      "city": "Busan",
      "country": "South Korea",
      "utc": 9
    },
    {
      "id": 105,
      "city": "Cape Town",
      "country": "South Africa",
      "utc": 2
    },
    {
      "id": 106,
      "city": "Jinan",
      "country": "China",
      "utc": 8
    },
    {
      "id": 107,
      "city": "Ningbo",
      "country": "China",
      "utc": 8
    },
    {
      "id": 108,
      "city": "Hanoi",
      "country": "Vietnam",
      "utc": 7
    },
    {
      "id": 109,
      "city": "Naples",
      "country": "Italy",
      "utc": 1
    },
    {
      "id": 110,
      "city": "Taiyuan—Yuci",
      "country": "China",
      "utc": 8
    },
    {
      "id": 111,
      "city": "Jeddah",
      "country": "Saudi Arabia",
      "utc": 3
    },
    {
      "id": 112,
      "city": "Detroit",
      "country": "United States of America",
      "utc": -5
    },
    {
      "id": 113,
      "city": "Hefei",
      "country": "China",
      "utc": 8
    },
    {
      "id": 114,
      "city": "Changsha",
      "country": "China",
      "utc": 8
    },
    {
      "id": 115,
      "city": "Kunming–Anning",
      "country": "China",
      "utc": 8
    },
    {
      "id": 116,
      "city": "Wuxi",
      "country": "China",
      "utc": 8
    },
    {
      "id": 117,
      "city": "Medellín",
      "country": "Colombia",
      "utc": -5
    },
    {
      "id": 118,
      "city": "Faisalabad",
      "country": "Pakistan",
      "utc": 5
    },
    {
      "id": 118,
      "city": "Aleppo",
      "country": "Syria",
      "utc": 2
    },
    {
      "id": 120,
      "city": "Kano",
      "country": "Nigeria",
      "utc": 1
    },
    {
      "id": 121,
      "city": "Montreal",
      "country": "Canada",
      "utc": -5
    },
    {
      "id": 122,
      "city": "Dakar",
      "country": "Senegal",
      "utc": 0
    },
    {
      "id": 123,
      "city": "Athens",
      "country": "Greece",
      "utc": 2
    },
    {
      "id": 124,
      "city": "Changzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 125,
      "city": "Durban",
      "country": "South Africa",
      "utc": 2
    },
    {
      "id": 126,
      "city": "Porto Alegre",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 127,
      "city": "Jaipur",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 128,
      "city": "Fortaleza",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 129,
      "city": "Addis Ababa",
      "country": "Ethiopia",
      "utc": 3
    },
    {
      "id": 130,
      "city": "Changchun",
      "country": "China",
      "utc": 8
    },
    {
      "id": 131,
      "city": "Shijiazhuang",
      "country": "China",
      "utc": 8
    },
    {
      "id": 132,
      "city": "Recife",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 133,
      "city": "Mashhad",
      "country": "Iran",
      "utc": 3.5
    },
    {
      "id": 134,
      "city": "Seattle",
      "country": "United States of America",
      "utc": -8
    },
    {
      "id": 135,
      "city": "Casablanca",
      "country": "Morocco",
      "utc": 0
    },
    {
      "id": 136,
      "city": "Salvador",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 137,
      "city": "Ürümqi",
      "country": "China",
      "utc": 8
    },
    {
      "id": 137,
      "city": "Lucknow",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 139,
      "city": "Chittagong",
      "country": "Bangladesh",
      "utc": 6
    },
    {
      "id": 140,
      "city": "Wenzhou",
      "country": "China",
      "utc": 8
    },
    {
      "id": 141,
      "city": "Ibadan",
      "country": "Nigeria",
      "utc": 1
    },
    {
      "id": 142,
      "city": "İzmir",
      "country": "Turkey",
      "utc": 3
    },
    {
      "id": 143,
      "city": "Curitiba",
      "country": "Brazil",
      "utc": -3
    },
    {
      "id": 144,
      "city": "San Diego",
      "country": "United States of America",
      "utc": -8
    },
    {
      "id": 145,
      "city": "Yaoundé",
      "country": "Cameroon",
      "utc": 1
    },
    {
      "id": 146,
      "city": "Zhangjiagang–Jiangyin–Jingjiang",
      "country": "China",
      "utc": 8
    },
    {
      "id": 147,
      "city": "Kanpur",
      "country": "India",
      "utc": 5.5
    },
    {
      "id": 148,
      "city": "Zhongshan",
      "country": "China",
      "utc": 8
    },
    {
      "id": 149,
      "city": "Sana'a",
      "country": "Yemen",
      "utc": 3
    },
    {
      "id": 150,
      "city": "Tel Aviv",
      "country": "Israel",
      "utc": 2
    }
  ];
  
  