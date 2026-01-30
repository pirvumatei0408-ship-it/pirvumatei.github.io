const cars = {

  // 🔹 MASINI NORMALE
  "Volkswagen": {
    "Golf": { price: "18.000 – 35.000 €", speed: "210 km/h", type: "Normal" },
    "Passat": { price: "25.000 – 45.000 €", speed: "220 km/h", type: "Normal" },
    "Tiguan": { price: "27.000 – 50.000 €", speed: "205 km/h", type: "Normal" }
  },

  "BMW": {
    "Seria 3": { price: "35.000 – 60.000 €", speed: "250 km/h", type: "Normal" },
    "Seria 5": { price: "45.000 – 75.000 €", speed: "250 km/h", type: "Normal" },
    "X5": { price: "60.000 – 95.000 €", speed: "230 km/h", type: "Normal" }
  },
"Audi": {
  "A3": { price: "25.000 – 40.000 €", speed: "210 km/h", type: "Normal" },
  "A4": { price: "35.000 – 55.000 €", speed: "240 km/h", type: "Normal" },
  "A6": { price: "45.000 – 75.000 €", speed: "250 km/h", type: "Normal" },
  "Q5": { price: "45.000 – 70.000 €", speed: "230 km/h", type: "Normal" },
  "RS6": { price: "120.000 €+", speed: "305 km/h", type: "Supercar" },
  "R8": { price: "180.000 €+", speed: "330 km/h", type: "Supercar" }
},
  "Dacia": {
    "Logan": { price: "9.000 – 14.000 €", speed: "175 km/h", type: "Normal" },
    "Duster": { price: "14.000 – 22.000 €", speed: "190 km/h", type: "Normal" }
  },

  "Toyota": {
    "Corolla": { price: "20.000 – 35.000 €", speed: "180 km/h", type: "Normal" },
    "Yaris": { price: "15.000 – 25.000 €", speed: "175 km/h", type: "Normal" },
    "RAV4": { price: "30.000 – 50.000 €", speed: "200 km/h", type: "Normal" }
  },

  "Ford": {
    "Fiesta": { price: "14.000 – 22.000 €", speed: "170 km/h", type: "Normal" },
    "Focus": { price: "20.000 – 35.000 €", speed: "215 km/h", type: "Normal" }
  },

  // 🔥 SUPERCAR
  "Ferrari": {
    "488 GTB": { price: "250.000 €+", speed: "330 km/h", type: "Supercar" },
    "F8 Tributo": { price: "280.000 €+", speed: "340 km/h", type: "Supercar" },
    "SF90 Stradale": { price: "400.000 €+", speed: "340 km/h", type: "Supercar" }
  },

  "Lamborghini": {
    "Huracan": { price: "230.000 €+", speed: "325 km/h", type: "Supercar" },
    "Aventador": { price: "400.000 €+", speed: "350 km/h", type: "Supercar" }
  },

  "McLaren": {
    "570S": { price: "200.000 €+", speed: "328 km/h", type: "Supercar" },
    "720S": { price: "300.000 €+", speed: "341 km/h", type: "Supercar" }
  },

  "Porsche": {
    "911 Turbo S": { price: "220.000 €+", speed: "330 km/h", type: "Supercar" }
  },

  // ⚡ HYPERCAR
  "Bugatti": {
    "Veyron": { price: "1.500.000 €+", speed: "407 km/h", type: "Hypercar" },
    "Chiron": { price: "3.000.000 €+", speed: "420 km/h", type: "Hypercar" }
  },

  "Koenigsegg": {
    "Agera RS": { price: "2.500.000 €+", speed: "447 km/h", type: "Hypercar" },
    "Jesko": { price: "3.000.000 €+", speed: "480 km/h", type: "Hypercar" }
  },

  "Rimac": {
    "Nevera": { price: "2.000.000 €+", speed: "412 km/h", type: "Hypercar" }
  },

  "Pagani": {
    "Huayra": { price: "2.600.000 €+", speed: "383 km/h", type: "Hypercar" }
  }
};
document.getElementById("result").innerHTML = `
  🚘 Tip: ${car.type}<br>
  💰 Preț: ${car.price}<br>
  🏎️ Viteză maximă: ${car.speed}
`;
  const cars = {
  "Audi": {
    "A3": { price: "25.000 – 40.000 €", speed: "210 km/h", type: "Normal", hp: "150 hp", nm: "250 Nm" },
    "A4": { price: "35.000 – 55.000 €", speed: "240 km/h", type: "Normal", hp: "190 hp", nm: "320 Nm" },
    "A6": { price: "45.000 – 75.000 €", speed: "250 km/h", type: "Normal", hp: "245 hp", nm: "370 Nm" },
    "RS6": { price: "120.000 €+", speed: "305 km/h", type: "Supercar", hp: "600 hp", nm: "800 Nm" },
    "R8": { price: "180.000 €+", speed: "330 km/h", type: "Supercar", hp: "620 hp", nm: "580 Nm" }
  },

  "BMW": {
    "320d": { price: "30.000 – 45.000 €", speed: "230 km/h", type: "Normal", hp: "190 hp", nm: "400 Nm" },
    "M3": { price: "90.000 €+", speed: "290 km/h", type: "Supercar", hp: "510 hp", nm: "650 Nm" },
    "M5 CS": { price: "150.000 €+", speed: "305 km/h", type: "Supercar", hp: "635 hp", nm: "750 Nm" }
  },

  "Mercedes": {
    "C220": { price: "35.000 – 50.000 €", speed: "235 km/h", type: "Normal", hp: "194 hp", nm: "400 Nm" },
    "AMG C63": { price: "95.000 €+", speed: "290 km/h", type: "Supercar", hp: "510 hp", nm: "700 Nm" },
    "AMG GT": { price: "140.000 €+", speed: "315 km/h", type: "Supercar", hp: "585 hp", nm: "700 Nm" }
  },

  "Volkswagen": {
    "Golf": { price: "25.000 – 35.000 €", speed: "210 km/h", type: "Normal", hp: "150 hp", nm: "250 Nm" },
    "Golf GTI": { price: "40.000 €+", speed: "250 km/h", type: "Sport", hp: "245 hp", nm: "370 Nm" },
    "Golf R": { price: "50.000 €+", speed: "270 km/h", type: "Sport", hp: "320 hp", nm: "420 Nm" }
  },

  "Ferrari": {
    "488 GTB": { price: "250.000 €+", speed: "330 km/h", type: "Supercar", hp: "670 hp", nm: "760 Nm" },
    "SF90": { price: "450.000 €+", speed: "340 km/h", type: "Hypercar", hp: "1000 hp", nm: "800 Nm" }
  },

  "Lamborghini": {
    "Huracan": { price: "230.000 €+", speed: "325 km/h", type: "Supercar", hp: "610 hp", nm: "560 Nm" },
    "Aventador": { price: "400.000 €+", speed: "350 km/h", type: "Supercar", hp: "770 hp", nm: "720 Nm" }
  },

  "Bugatti": {
    "Chiron": { price: "3.000.000 €+", speed: "420 km/h", type: "Hypercar", hp: "1500 hp", nm: "1600 Nm" }
  },

  "Koenigsegg": {
    "Jesko": { price: "3.000.000 €+", speed: "480 km/h", type: "Hypercar", hp: "1600 hp", nm: "1500 Nm" }
  },

  "Rimac": {
    "Nevera": { price: "2.000.000 €+", speed: "412 km/h", type: "Hypercar", hp: "1914 hp", nm: "2360 Nm" }
  }
};
