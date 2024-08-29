const PIDS_00_20 = [
  { "id": "01", "name": "Monitor status since DTCs cleared" },
  { "id": "02", "name": "Freeze DTC" },
  { "id": "03", "name": "Fuel system status" },
  { "id": "04", "name": "Calculated engine load" },
  { "id": "05", "name": "Engine coolant temperature" },
  { "id": "06", "name": "Short term fuel trim (bank 1)" },
  { "id": "07", "name": "Long term fuel trim (bank 1)" },
  { "id": "08", "name": "Short term fuel trim (bank 2)" },
  { "id": "09", "name": "Long term fuel trim (bank 2)" },
  { "id": "0A", "name": "Fuel pressure (gauge pressure)" },
  { "id": "0B", "name": "Intake manifold absolute pressure" },
  { "id": "0C", "name": "Engine speed" },
  { "id": "0D", "name": "Vehicle speed" },
  { "id": "0E", "name": "Timing advance" },
  { "id": "0F", "name": "Intake air temperature" },
  { "id": "10", "name": "Mass air flow sensor air flow rate" },
  { "id": "11", "name": "Throttle position" },
  { "id": "12", "name": "Commanded secondary air status" },
  { "id": "13", "name": "Oxygen sensors present (2 banks)" },
  { "id": "14", "name": "Oxygen sensor 1 (voltage)" },
  { "id": "15", "name": "Oxygen sensor 2 (voltage)" },
  { "id": "16", "name": "Oxygen sensor 3 (voltage)" },
  { "id": "17", "name": "Oxygen sensor 4 (voltage)" },
  { "id": "18", "name": "Oxygen sensor 5 (voltage)" },
  { "id": "19", "name": "Oxygen sensor 6 (voltage)" },
  { "id": "1A", "name": "Oxygen sensor 7 (voltage)" },
  { "id": "1B", "name": "Oxygen sensor 8 (voltage)" },
  { "id": "1C", "name": "OBD standards the vehicle conforms to" },
  { "id": "1D", "name": "Oxygen sensors present (4 banks)" },
  { "id": "1E", "name": "Auxiliary input status" },
  { "id": "1F", "name": "Run time since engine start" },
  { "id": "20", "name": "PIDs supported [21 - 40]" }
]

const PIDS_21_40 = [
  { "id": "21", "name": "Distance traveled with malfunction indicator lamp (MIL) on" },
  { "id": "22", "name": "Fuel rail pressure (relative to manifold vacuum)" },
  { "id": "23", "name": "Fuel rail pressure (absolute)" },
  { "id": "24", "name": "Oxygen sensor 1 (short term fuel trim)" },
  { "id": "25", "name": "Oxygen sensor 2 (short term fuel trim)" },
  { "id": "26", "name": "Oxygen sensor 1 (long term fuel trim)" },
  { "id": "27", "name": "Oxygen sensor 2 (long term fuel trim)" },
  { "id": "28", "name": "Commanded EGR" },
  { "id": "29", "name": "EGR error" },
  { "id": "2A", "name": "Commanded evaporative purge" },
  { "id": "2B", "name": "Fuel tank level input" },
  { "id": "2C", "name": "Warm-ups since codes cleared" },
  { "id": "2D", "name": "Distance traveled since codes cleared" },
  { "id": "2E", "name": "Evaporative system vapor pressure" },
  { "id": "2F", "name": "Barometric pressure" },
  { "id": "30", "name": "Oxygen sensor 1 (voltage, short term fuel trim)" },
  { "id": "31", "name": "Oxygen sensor 2 (voltage, short term fuel trim)" },
  { "id": "32", "name": "Oxygen sensor 3 (voltage, short term fuel trim)" },
  { "id": "33", "name": "Oxygen sensor 4 (voltage, short term fuel trim)" },
  { "id": "34", "name": "Oxygen sensor 5 (voltage, short term fuel trim)" },
  { "id": "35", "name": "Oxygen sensor 6 (voltage, short term fuel trim)" },
  { "id": "36", "name": "Oxygen sensor 7 (voltage, short term fuel trim)" },
  { "id": "37", "name": "Oxygen sensor 8 (voltage, short term fuel trim)" },
  { "id": "38", "name": "Catalyst temperature bank 1, sensor 1" },
  { "id": "39", "name": "Catalyst temperature bank 1, sensor 2" },
  { "id": "3A", "name": "Catalyst temperature bank 2, sensor 1" },
  { "id": "3B", "name": "Catalyst temperature bank 2, sensor 2" },
  { "id": "3C", "name": "Catalyst temperature bank 1, sensor 3" },
  { "id": "3D", "name": "Catalyst temperature bank 1, sensor 4" },
  { "id": "3E", "name": "Catalyst temperature bank 2, sensor 3" },
  { "id": "3F", "name": "Catalyst temperature bank 2, sensor 4" },
  { "id": "40", "name": "PIDs supported [41 - 60]" }
];

const PIDS_41_60 = [
  { "id": "41", "name": "Oxygen sensor 1 (short term fuel trim)" },
  { "id": "42", "name": "Oxygen sensor 2 (short term fuel trim)" },
  { "id": "43", "name": "Oxygen sensor 3 (short term fuel trim)" },
  { "id": "44", "name": "Oxygen sensor 4 (short term fuel trim)" },
  { "id": "45", "name": "Oxygen sensor 5 (short term fuel trim)" },
  { "id": "46", "name": "Oxygen sensor 6 (short term fuel trim)" },
  { "id": "47", "name": "Oxygen sensor 7 (short term fuel trim)" },
  { "id": "48", "name": "Oxygen sensor 8 (short term fuel trim)" },
  { "id": "49", "name": "Oxygen sensor 1 (long term fuel trim)" },
  { "id": "4A", "name": "Oxygen sensor 2 (long term fuel trim)" },
  { "id": "4B", "name": "Oxygen sensor 3 (long term fuel trim)" },
  { "id": "4C", "name": "Oxygen sensor 4 (long term fuel trim)" },
  { "id": "4D", "name": "Oxygen sensor 5 (long term fuel trim)" },
  { "id": "4E", "name": "Oxygen sensor 6 (long term fuel trim)" },
  { "id": "4F", "name": "Oxygen sensor 7 (long term fuel trim)" },
  { "id": "50", "name": "Oxygen sensor 8 (long term fuel trim)" },
  { "id": "51", "name": "Commanded EGR" },
  { "id": "52", "name": "EGR error" },
  { "id": "53", "name": "Commanded evaporative purge" },
  { "id": "54", "name": "Fuel tank level input" },
  { "id": "55", "name": "Warm-ups since codes cleared" },
  { "id": "56", "name": "Distance traveled since codes cleared" },
  { "id": "57", "name": "Evaporative system vapor pressure" },
  { "id": "58", "name": "Barometric pressure" },
  { "id": "59", "name": "Catalyst temperature bank 1, sensor 1" },
  { "id": "5A", "name": "Catalyst temperature bank 1, sensor 2" },
  { "id": "5B", "name": "Catalyst temperature bank 2, sensor 1" },
  { "id": "5C", "name": "Catalyst temperature bank 2, sensor 2" },
  { "id": "5D", "name": "Catalyst temperature bank 1, sensor 3" },
  { "id": "5E", "name": "Catalyst temperature bank 1, sensor 4" },
  { "id": "5F", "name": "Catalyst temperature bank 2, sensor 3" },
  { "id": "60", "name": "Catalyst temperature bank 2, sensor 4" }
];

const PIDS_61_80 = [
  { "id": "61", "name": "Fuel composition" },
  { "id": "62", "name": "Hood status" },
  { "id": "63", "name": "Run time since engine start (hours)" },
  { "id": "64", "name": "Distance traveled while MIL is on" },
  { "id": "65", "name": "Fuel level" },
  { "id": "66", "name": "Fuel type" },
  { "id": "67", "name": "Oil temperature" },
  { "id": "68", "name": "Battery voltage" },
  { "id": "69", "name": "Engine load (percentage)" },
  { "id": "6A", "name": "Engine torque" },
  { "id": "6B", "name": "Intake air temperature (IAT)" },
  { "id": "6C", "name": "Coolant temperature" },
  { "id": "6D", "name": "Throttle position (percentage)" },
  { "id": "6E", "name": "Intake manifold pressure" },
  { "id": "6F", "name": "Ambient air temperature" },
  { "id": "70", "name": "Turbocharger boost pressure" },
  { "id": "71", "name": "Exhaust gas temperature (EGT)" },
  { "id": "72", "name": "Oil pressure" },
  { "id": "73", "name": "Intake air mass flow rate" },
  { "id": "74", "name": "Exhaust pressure" },
  { "id": "75", "name": "Fuel pressure (absolute)" },
  { "id": "76", "name": "Fuel rail pressure (relative to manifold vacuum)" },
  { "id": "77", "name": "Oxygen sensor 1 (short term fuel trim)" },
  { "id": "78", "name": "Oxygen sensor 2 (short term fuel trim)" },
  { "id": "79", "name": "Oxygen sensor 3 (short term fuel trim)" },
  { "id": "7A", "name": "Oxygen sensor 4 (short term fuel trim)" },
  { "id": "7B", "name": "Oxygen sensor 5 (short term fuel trim)" },
  { "id": "7C", "name": "Oxygen sensor 6 (short term fuel trim)" },
  { "id": "7D", "name": "Oxygen sensor 7 (short term fuel trim)" },
  { "id": "7E", "name": "Oxygen sensor 8 (short term fuel trim)" },
  { "id": "7F", "name": "Oxygen sensor 1 (long term fuel trim)" },
  { "id": "80", "name": "Oxygen sensor 2 (long term fuel trim)" }
];

const PIDS_80_A0 = [
  { "id": "80", "name": "Oxygen sensor 2 (long term fuel trim)" },
  { "id": "81", "name": "Oxygen sensor 3 (long term fuel trim)" },
  { "id": "82", "name": "Oxygen sensor 4 (long term fuel trim)" },
  { "id": "83", "name": "Oxygen sensor 5 (long term fuel trim)" },
  { "id": "84", "name": "Oxygen sensor 6 (long term fuel trim)" },
  { "id": "85", "name": "Oxygen sensor 7 (long term fuel trim)" },
  { "id": "86", "name": "Oxygen sensor 8 (long term fuel trim)" },
  { "id": "87", "name": "Commanded fuel pressure" },
  { "id": "88", "name": "Fuel pressure (gauge pressure)" },
  { "id": "89", "name": "Engine temperature (temperature sensor)" },
  { "id": "8A", "name": "Throttle position (absolute)" },
  { "id": "8B", "name": "Accelerator pedal position (percentage)" },
  { "id": "8C", "name": "Torque converter clutch status" },
  { "id": "8D", "name": "Transmission temperature" },
  { "id": "8E", "name": "Wheel speed sensor data (front left)" },
  { "id": "8F", "name": "Wheel speed sensor data (front right)" },
  { "id": "90", "name": "Wheel speed sensor data (rear left)" },
  { "id": "91", "name": "Wheel speed sensor data (rear right)" },
  { "id": "92", "name": "Vehicle acceleration (X-axis)" },
  { "id": "93", "name": "Vehicle acceleration (Y-axis)" },
  { "id": "94", "name": "Vehicle acceleration (Z-axis)" },
  { "id": "95", "name": "Steering angle sensor" },
  { "id": "96", "name": "Brake pedal position" },
  { "id": "97", "name": "Clutch pedal position" },
  { "id": "98", "name": "Engine oil temperature" },
  { "id": "99", "name": "Fuel rail pressure (high pressure)" },
  { "id": "9A", "name": "Exhaust gas recirculation (EGR) temperature" },
  { "id": "9B", "name": "Intake manifold temperature" },
  { "id": "9C", "name": "Engine coolant temperature (secondary sensor)" },
  { "id": "9D", "name": "Power take-off (PTO) status" },
  { "id": "9E", "name": "Hydraulic pressure (transmission)" },
  { "id": "9F", "name": "Battery voltage (high-resolution)" },
  { "id": "A0", "name": "PIDs supported [A1 - C0]" }
];

const PIDS_A0_C0 = [
  { "id": "A0", "name": "PIDs supported [A1 - C0]" },
  { "id": "A1", "name": "Fuel rail pressure (high pressure)" },
  { "id": "A2", "name": "Fuel rail pressure (low pressure)" },
  { "id": "A3", "name": "Engine coolant temperature (secondary sensor)" },
  { "id": "A4", "name": "Oil temperature (engine)" },
  { "id": "A5", "name": "Transmission oil temperature" },
  { "id": "A6", "name": "Battery voltage (high-resolution)" },
  { "id": "A7", "name": "Exhaust gas temperature (EGT)" },
  { "id": "A8", "name": "Turbocharger boost pressure" },
  { "id": "A9", "name": "Intake air mass flow rate" },
  { "id": "AA", "name": "Intake air temperature" },
  { "id": "AB", "name": "Throttle position (absolute)" },
  { "id": "AC", "name": "Accelerator pedal position (percentage)" },
  { "id": "AD", "name": "Brake pedal position" },
  { "id": "AE", "name": "Clutch pedal position" },
  { "id": "AF", "name": "Steering angle sensor" },
  { "id": "B0", "name": "Vehicle speed (GPS)" },
  { "id": "B1", "name": "Wheel speed sensor data (front left)" },
  { "id": "B2", "name": "Wheel speed sensor data (front right)" },
  { "id": "B3", "name": "Wheel speed sensor data (rear left)" },
  { "id": "B4", "name": "Wheel speed sensor data (rear right)" },
  { "id": "B5", "name": "Vehicle acceleration (X-axis)" },
  { "id": "B6", "name": "Vehicle acceleration (Y-axis)" },
  { "id": "B7", "name": "Vehicle acceleration (Z-axis)" },
  { "id": "B8", "name": "Hydraulic pressure (transmission)" },
  { "id": "B9", "name": "Power take-off (PTO) status" },
  { "id": "BA", "name": "Fuel composition" },
  { "id": "BB", "name": "Hood status" },
  { "id": "BC", "name": "Run time since engine start (hours)" },
  { "id": "BD", "name": "Distance traveled while MIL is on" },
  { "id": "BE", "name": "Fuel level" },
  { "id": "BF", "name": "Fuel type" },
  { "id": "C0", "name": "PIDs supported [C1 - E0]" }
];




function hexToBinary(hex) {
  hex = hex.replace(/^0x/, '');

  const decimal = parseInt(hex, 16);

  let binary = decimal.toString(2);

  const padLength = hex.length * 4;
  binary = binary.padStart(padLength, '0');

  return binary;
}


function checkForSupported(pidvalue, value) {
  const binaryValue = hexToBinary(value)
  const supportedPids = []
  let PIDS = []
  switch (pidvalue) {
      case '00':
          PIDS = PIDS_00_20;
          break;
      case '20':
          PIDS = PIDS_21_40;
          break;
      case '40':
          PIDS = PIDS_41_60;
          break;
      case '60':
          PIDS = PIDS_61_80;
          break;
      case '80':
          PIDS = PIDS_80_A0;
          break;
      case 'A0':
          PIDS = PIDS_A0_C0;
          break;
      default:
          console.log('Unsupported PID value');
          return [];
  }
  for (let i in binaryValue) {
      if (binaryValue[i] == 1) {
          supportedPids.push(PIDS[i])
      }
  }
  // console.log(supportedPids);
  return supportedPids
}

console.log(checkForSupported('87128515458451'));
