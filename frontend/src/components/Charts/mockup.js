export const stats = {
  usage: {
    door: { onTime: 0 },
    stove: { onTime: 0 },
    television: { onTime: 0 },
    light: { onTime: 0 },
  },
  average: {
    temperature: { value: 32, unit: "°C" },
    co2: { value: 954, unit: "mol" },
    humidity: { value: 26, unit: "g.m-3" },
    pressure: { value: 840, unit: "pas" },
  },
  days: {
    1: {
      average: {
        temperature: 26,
        co2: 1208,
        humidity: 24,
        pressure: 1202,
      },
    },
    2: {
      average: {
        temperature: 1,
        co2: 1453,
        humidity: 39,
        pressure: 1320,
      },
    },
  },

  weeks: {
    41: {
      average: {
        temperature: 40,
        co2: 960,
        humidity: 25,
        pressure: 589,
      },
    },
    42: {
      average: {
        temperature: 27,
        co2: 700,
        humidity: 34,
        pressure: 1083,
      },
    },
    43: {
      average: {
        temperature: 22,
        co2: 598,
        humidity: 29,
        pressure: 1019,
      },
    },
    44: {
      average: {
        temperature: 18,
        co2: 1019,
        humidity: 32,
        pressure: 1050,
      },
    },
    45: {
      average: {
        temperature: 20,
        co2: 892,
        humidity: 30,
        pressure: 1046,
      },
    },
  },
};
