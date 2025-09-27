export type Unit = {
  name: string;
  symbol: string;
  definition: string;
};
export type Category = {
  name: string;
  units: Unit[];
};
export const categories: Record<string, Category> = {
  Length: {
    name: 'Length',
    units: [
      { name: 'Meter', symbol: 'm', definition: 'The base unit of length in the International System of Units (SI).' },
      { name: 'Kilometer', symbol: 'km', definition: 'One thousand meters.' },
      { name: 'Centimeter', symbol: 'cm', definition: 'One hundredth of a meter.' },
      { name: 'Millimeter', symbol: 'mm', definition: 'One thousandth of a meter.' },
      { name: 'Mile', symbol: 'mi', definition: 'A unit of length equal to 1,760 yards (1.60934 kilometers).' },
      { name: 'Yard', symbol: 'yd', definition: 'A unit of length equal to 3 feet or 36 inches (0.9144 meters).' },
      { name: 'Foot', symbol: 'ft', definition: 'A unit of length equal to 12 inches (0.3048 meters).' },
      { name: 'Inch', symbol: 'in', definition: 'A unit of length equal to 1/12 of a foot (2.54 centimeters).' },
    ],
  },
  Mass: {
    name: 'Mass',
    units: [
      { name: 'Kilogram', symbol: 'kg', definition: 'The base unit of mass in the International System of Units (SI).' },
      { name: 'Gram', symbol: 'g', definition: 'One thousandth of a kilogram.' },
      { name: 'Milligram', symbol: 'mg', definition: 'One thousandth of a gram.' },
      { name: 'Pound', symbol: 'lb', definition: 'A unit of mass equal to 16 ounces (0.453592 kilograms).' },
      { name: 'Ounce', symbol: 'oz', definition: 'A unit of mass equal to 1/16 of a pound (28.3495 grams).' },
    ],
  },
  Temperature: {
    name: 'Temperature',
    units: [
      { name: 'Celsius', symbol: '°C', definition: 'A scale of temperature on which water freezes at 0° and boils at 100°.' },
      { name: 'Fahrenheit', symbol: '°F', definition: 'A scale of temperature on which water freezes at 32° and boils at 212°.' },
      { name: 'Kelvin', symbol: 'K', definition: 'The SI base unit of thermodynamic temperature, equal in magnitude to the degree Celsius.' },
    ],
  },
  Volume: {
    name: 'Volume',
    units: [
      { name: 'Liter', symbol: 'L', definition: 'A metric unit of capacity, equal to one cubic decimeter.' },
      { name: 'Milliliter', symbol: 'mL', definition: 'One thousandth of a liter.' },
      { name: 'US Gallon', symbol: 'gal', definition: 'A unit of liquid capacity equal to 4 quarts (3.785 liters).' },
      { name: 'US Quart', symbol: 'qt', definition: 'A unit of liquid capacity equal to a quarter of a gallon (0.946 liters).' },
      { name: 'US Pint', symbol: 'pt', definition: 'A unit of liquid capacity equal to half a quart (0.473 liters).' },
      { name: 'US Cup', symbol: 'cup', definition: 'A unit of cooking measure, equivalent to 236.6 ml.' },
      { name: 'US Fluid Ounce', symbol: 'fl oz', definition: 'A unit of liquid capacity equal to 1/128 of a US gallon (29.57 ml).' },
    ],
  },
  Data: {
    name: 'Data',
    units: [
      { name: 'Bit', symbol: 'b', definition: 'The smallest unit of data in a computer, with a single binary value of either 0 or 1.' },
      { name: 'Byte', symbol: 'B', definition: 'A unit of digital information that most commonly consists of eight bits.' },
      { name: 'Kilobyte', symbol: 'KB', definition: 'A multiple of the unit byte for digital information, equal to 1000 bytes.' },
      { name: 'Megabyte', symbol: 'MB', definition: 'A multiple of the unit byte for digital information, equal to 1,000,000 bytes.' },
      { name: 'Gigabyte', symbol: 'GB', definition: 'A multiple of the unit byte for digital information, equal to 1,000,000,000 bytes.' },
      { name: 'Terabyte', symbol: 'TB', definition: 'A multiple of the unit byte for digital information, equal to 1,000,000,000,000 bytes.' },
    ],
  },
  Power: {
    name: 'Power',
    units: [
      { name: 'Watt', symbol: 'W', definition: 'The SI unit of power, equivalent to one joule per second.' },
      { name: 'Kilowatt', symbol: 'kW', definition: 'A measure of 1,000 watts of electrical power.' },
      { name: 'Horsepower', symbol: 'hp', definition: 'A unit of power, approximately equal to 745.7 watts.' },
    ],
  },
  Voltage: {
    name: 'Voltage',
    units: [
      { name: 'Volt', symbol: 'V', definition: 'The SI unit of electric potential, electric potential difference (voltage), and electromotive force.' },
      { name: 'Millivolt', symbol: 'mV', definition: 'One thousandth of a volt.' },
      { name: 'Kilovolt', symbol: 'kV', definition: 'One thousand volts.' },
    ],
  },
  'Flow Rate': {
    name: 'Flow Rate',
    units: [
      { name: 'Liters per second', symbol: 'L/s', definition: 'A metric unit of volume flow rate.' },
      { name: 'Cubic meters per second', symbol: 'm³/s', definition: 'The SI unit of volume flow rate, equal to 1000 liters per second.' },
      { name: 'US Gallons per minute', symbol: 'gpm', definition: 'A unit of volume flow rate, common in the US.' },
    ],
  },
  'Wind Speed': {
    name: 'Wind Speed',
    units: [
        { name: 'Meters per second', symbol: 'm/s', definition: 'The SI unit for speed.' },
        { name: 'Kilometers per hour', symbol: 'km/h', definition: 'A common unit of speed, 1 m/s is equal to 3.6 km/h.' },
        { name: 'Miles per hour', symbol: 'mph', definition: 'A common unit of speed in the US and UK.' },
        { name: 'Knots', symbol: 'kn', definition: 'A unit of speed equal to one nautical mile per hour, used in maritime and aviation.' },
    ],
  },
};
const conversionFactors: Record<string, Record<string, number>> = {
  m: { m: 1, km: 0.001, cm: 100, mm: 1000, mi: 0.000621371, yd: 1.09361, ft: 3.28084, in: 39.3701 },
  kg: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274 },
  L: { L: 1, mL: 1000, gal: 0.264172, qt: 1.05669, pt: 2.11338, cup: 4.22675, 'fl oz': 33.814 },
  b: { b: 1, B: 0.125, KB: 1.25e-4, MB: 1.25e-7, GB: 1.25e-10, TB: 1.25e-13 },
  W: { W: 1, kW: 0.001, hp: 0.00134102 },
  V: { V: 1, mV: 1000, kV: 0.001 },
  'L/s': { 'L/s': 1, 'm³/s': 0.001, gpm: 15.8503 },
  'm/s': { 'm/s': 1, 'km/h': 3.6, mph: 2.23694, kn: 1.94384 },
};
const toBase = (value: number, fromUnit: string, category: string): number => {
  if (category === 'Temperature') return value;
  const baseUnit = categories[category].units[0].symbol;
  const factor = conversionFactors[baseUnit][fromUnit];
  return value / factor;
};
const fromBase = (value: number, toUnit: string, category: string): number => {
  if (category === 'Temperature') return value;
  const baseUnit = categories[category].units[0].symbol;
  const factor = conversionFactors[baseUnit][toUnit];
  return value * factor;
};
export const convert = (value: number, fromUnit: string, toUnit: string, category: string): number => {
  if (fromUnit === toUnit) return value;
  if (category === 'Temperature') {
    if (fromUnit === '°C') {
      if (toUnit === '°F') return (value * 9/5) + 32;
      if (toUnit === 'K') return value + 273.15;
    }
    if (fromUnit === '°F') {
      if (toUnit === '°C') return (value - 32) * 5/9;
      if (toUnit === 'K') return ((value - 32) * 5/9) + 273.15;
    }
    if (fromUnit === 'K') {
      if (toUnit === '°C') return value - 273.15;
      if (toUnit === '°F') return ((value - 273.15) * 9/5) + 32;
    }
    return value;
  }
  const baseValue = toBase(value, fromUnit, category);
  return fromBase(baseValue, toUnit, category);
};