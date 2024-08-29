export class DataHexDecoder {
  calculateEngineSpeed(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 4;

    return result;
  }

  calcuteEngineLoad(hexdata) {
    let hexA = hexdata.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A / 2.55;

    console.log("Engine Load in percentage:", result + " %");
    return result;
  }

  engineColentTemprature(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);
    let result = A - 40;

    console.log("Engine coolant temperature: " + result + "°C");
    return result;
  }

  calculate_fuel_Trim(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A / 1.28 - 100;

    console.log("fuel_Trim: " + result + " %");
    return result;
  }

  calculate_fuel_Pressure(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = 3 * A;

    console.log("fuel_Pressure : " + result + " kpa");
    return result;
  }

  intake_manifold_absolute_pressure(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = 1 * A;

    console.log("intake_manifold_absolute_pressure : " + result + " kpa");
    return result;
  }

  cal_vechile_Speed(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);
    let result = 1 * A;

    console.log("Vechile speed in Km/h:", result + " Km/h");
    return result;
  }

  cal_timing_Advance(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = A / 2 - 64;

    console.log("Timing Advance in deg:", result + " deg");
    return result;
  }

  cal_intake_air_temp(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = A - 40;

    console.log("Intake AIr Temp in degC:", result + " degC");
    return result;
  }

  cal_mass_air_flow(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 100;

    console.log("mass air flow in g/s:", result + " g/s");
    return result;
  }

  cal_throttle_position(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;

    console.log("throttle position in %:", result + " %");
    return result;
  }

  cal_oxigen_senV(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = A / 200;

    console.log("oxigen sensor voltage in V:", result + " V");
    return result;
  }

  cal_run_time_engine_start(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = 256 * A + B;

    console.log("runtime since engine start:", result + " seconds");
    return result;
  }

  calControlModuleVoltage(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 1000;
    return `${result} V`;
  }

  calAbsoluteLoadValue(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (100 / 255) * (256 * A + B);
    return `${result} %`;
  }

  calCommandedAirFuelEquivalence(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (2 / 65536) * (256 * A + B);
    return `${result} ratio`;
  }

  calRelativeThrottleposition(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;
    return `${result} %`;
  }

  calAmbientAirTemperature(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);
    let result = A - 40;
    return `${result} °C`;
  }

  // method for PIDs 47 - 4C
  calAbsoluteThrottlePosition(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;
    return `${result} %`;
  }

  calTimeRunWithMIL(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = 256 * A + B;
    return `${result} min`;
  }

  calTimeSinceDtcCleared(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = 256 * A + B;
    return `${result} min`;
  }

  calMaxFuelAirEquiv(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A;
    return `${result} ratio`;
  }

  calMaxAirFlowRate(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A * 10;
    return `${result} g/s`;
  }

  calFuelType(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A;
    return `${result} encoded`;
  }

  calEthanolFuelPercentage(hexData) {
    let hexA = hexData.slice(0, 2);

    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;
    return `${result} %`;
  }

  calAbsoluteEvapSystemVaporPressure(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 200;
    return `${result} kPa`;
  }

  calEvapSystemVaporPressure(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = 256 * A + B;
    return `${result} Pa`;
  }
  // method for PIDs 55 - 58
  calShortTermSecondaryOxygenSensorTrim(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = (100 / 128) * A - 100;
    return `${result} %`;
  }

  calFuelRailAbsolutePressure(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = 10 * (256 * A + B);
    return `${result} kPa`;
  }

  calRelativeAcceleratorPedalPosition(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;
    return `${result} %`;
  }

  calHybridBatteryPackRemainingLife(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = (100 / 255) * A;
    return `${result} %`;
  }

  calEngineOilTemperature(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A - 40;
    return `${result} °C`;
  }

  calFuelInjectionTiming(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 128;
    return `${result} °`;
  }

  calEngineFuelRate(hexData) {
    let hexA = hexData.slice(0, 2);
    let hexB = hexData.slice(2, 4);

    let A = parseInt(hexA, 16);
    let B = parseInt(hexB, 16);

    let result = (256 * A + B) / 20;
    return `${result} L/h`;
  }

  calEmissionRequirements(hexData) {
    let hexA = hexData.slice(0, 2);
    let A = parseInt(hexA, 16);

    let result = A;
    return `${result} encoded`;
  }
}
