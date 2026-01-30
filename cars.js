const cars = {
  // 🔹 MASINI NORMALE
  "Volkswagen": {
    "Golf": { price: "18.000 – 35.000 €", speed: "210 km/h", type: "Normal", hp: "150 hp", nm: "250 Nm" },
    "Passat": { price: "25.000 – 45.000 €", speed: "220 km/h", type: "Normal", hp: "190 hp", nm: "320 Nm" },
    "Tiguan": { price: "27.000 – 50.000 €", speed: "205 km/h", type: "Normal", hp: "180 hp", nm: "300 Nm" }
  },
  "BMW": {
    "Seria 3": { price: "35.000 – 60.000 €", speed: "250 km/h", type: "Normal", hp: "190 hp", nm: "320 Nm" },
    "Seria 5": { price: "45.000 – 75.000 €", speed: "250 km/h", type: "Normal", hp: "245 hp", nm: "370 Nm" },
    "X5": { price: "60.000 – 95.000 €", speed: "230 km/h", type: "Normal", hp: "300 hp", nm: "400 Nm" }
  },
  "Audi": {
    "A3": { price: "25.000 – 40.000 €", speed: "210 km/h", type: "Normal", hp: "150 hp", nm: "250 Nm" },
    "A4": { price: "35.000 – 55.000 €", speed: "240 km/h", type: "Normal", hp: "190 hp", nm: "320 Nm" },
    "A6": { price: "45.000 – 75.000 €", speed: "250 km/h", type: "Normal", hp: "245 hp", nm: "370 Nm" },
    "Q5": { price: "45.000 – 70.000 €", speed: "230 km/h", type: "Normal", hp: "250 hp", nm: "370 Nm" },
    "RS6": { price: "120.000 €+", speed: "305 km/h", type: "Supercar", hp: "600 hp", nm: "800 Nm" },
    "R8": { price: "180.000 €+", speed: "330 km/h", type: "Supercar", hp: "620 hp", nm: "580 Nm" }
  },
  "Dacia": {
    "Logan": { price: "9.000 – 14.000 €", speed: "175 km/h", type: "Normal", hp: "90 hp", nm: "130 Nm" },
    "Duster": { price: "14.000 – 22.000 €", speed: "190 km/h", type: "Normal", hp: "115 hp", nm: "150 Nm" }
  },
  "Toyota": {
    "Corolla": { price: "20.000 – 35.000 €", speed: "180 km/h", type: "Normal", hp: "130 hp", nm: "170 Nm" },
    "Yaris": { price: "15.000 – 25.000 €", speed: "175 km/h", type: "Normal", hp: "110 hp", nm: "140 Nm" },
    "RAV4": { price: "30.000 – 50.000 €", speed: "200 km/h", type: "Normal", hp: "203 hp", nm: "250 Nm" }
  },
  "Ford": {
    "Fiesta": { price: "14.000 – 22.000 €", speed: "170 km/h", type: "Normal", hp: "100 hp", nm: "140 Nm" },
    "Focus": { price: "20.000 – 35.000 €", speed: "215 km/h", type: "Normal", hp: "150 hp", nm: "240 Nm" }
  },
  "Skoda": {
    "Octavia": { price: "20.000 – 35.000 €", speed: "210 km/h", type: "Normal", hp: "150 hp", nm: "250 Nm" },
    "Superb": { price: "30.000 – 50.000 €", speed: "240 km/h", type: "Normal", hp: "190 hp", nm: "320 Nm" },
    "Kodiaq": { price: "35.000 – 55.000 €", speed: "220 km/h", type: "Normal", hp: "200 hp", nm: "350 Nm" }
  },

  // 🔥 SUPERCAR
  "Ferrari": {
    "488 GTB": { price: "250.000 €+", speed: "330 km/h", type: "Supercar", hp: "670 hp", nm: "760 Nm" },
    "F8 Tributo": { price: "280.000 €+", speed: "340 km/h", type: "Supercar", hp: "710 hp", nm: "770 Nm" },
    "SF90 Stradale": { price: "400.000 €+", speed: "340 km/h", type: "Hypercar", hp: "1000 hp", nm: "800 Nm" }
  },
  "Lamborghini": {
    "Huracan": { price: "230.000 €+", speed: "325 km/h", type: "Supercar", hp: "610 hp", nm: "560 Nm" },
    "Aventador": { price: "400.000 €+", speed: "350 km/h", type: "Supercar", hp: "770 hp", nm: "720 Nm" }
  },
  "McLaren": {
    "570S": { price: "200.000 €+", speed: "328 km/h", type: "Supercar", hp: "570 hp", nm: "600 Nm" },
    "720S": { price: "300.000 €+", speed: "341 km/h", type: "Supercar", hp: "720 hp", nm: "770 Nm" }
  },
  "Porsche": {
    "911 Turbo S": { price: "220.000 €+", speed: "330 km/h", type: "Supercar", hp: "650 hp", nm: "800 Nm" }
  },

  // ⚡ HYPERCAR
  "Bugatti": {
    "Veyron": { price: "1.500.000 €+", speed: "407 km/h", type: "Hypercar", hp: "1001 hp", nm: "1250 Nm" },
    "Chiron": { price: "3.000.000 €+", speed: "420 km/h", type: "Hypercar", hp: "1500 hp", nm: "1600 Nm" }
  },
  "Koenigsegg": {
    "Agera RS": { price: "2.500.000 €+", speed: "447 km/h", type: "Hypercar", hp: "1175 hp", nm: "1280 Nm" },
    "Jesko": { price: "3.000.000 €+", speed: "480 km/h", type: "Hypercar", hp: "1600 hp", nm: "1500 Nm" }
  },
  "Rimac": {
    "Nevera": { price: "2.000.000 €+", speed: "412 km/h", type: "Hypercar", hp: "1914 hp", nm: "2360 Nm" }
  },
  "Pagani": {
    "Huayra": { price: "2.600.000 €+", speed: "383 km/h", type: "Hypercar", hp: "730 hp", nm: "1100 Nm" }
  }
};
