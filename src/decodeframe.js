import { checkForSupported } from './checkpid';
import { sendRequestForSupportedPIds } from './sendRequest';
import { DataHexDecoder } from './calFUnction';

export function decodeFrame(data) {
  let arr = `${data}`.split('  ');
  if (arr[2] == '7E8') {
    let length = arr[4].split(' ')[0];
    let hexdata = arr[4].split(' ');
    const pid = hexdata[2];
    hexdata.splice(0, 3);
    hexdata.splice(length, hexdata.length - length);
    hexdata = hexdata.join('').trim();
    const decodedata = new DataHexDecoder();
    switch (pid) {
      case '00':
        const supportedPids = checkForSupported(hexdata);
        sendRequestForSupportedPIds(supportedPids);
        console.log('------>', supportedPids);
        break;

      case '01':
        return {
          id: '01',
          name: 'Monitor status since DTCs Cleared',
          value: decodedata.monitor_status_since_DTCs_cleared(hexdata)
        };
      case '02':
        return {
          id: '02',
          name: 'Freez dtc frame stored',
          value: decodedata.freez_dtc(hexdata)

        }
      case '03':
        return {

          id: '03',
          name: 'Fuel system status',
          value: decodedata.fuel_system_status(hexdata)

        }

      case '04':
        return {
          id: '04',
          name: 'Calculate Engine Load',
          value: decodedata.calcuteEngineLoad(hexdata)
        };
      case '05':
        return {
          id: '05',
          name: 'Engine coolant temperature',
          value: decodedata.engineColentTemprature(hexdata)
        };
      case '06':
        return {
          id: '06',
          name: 'Short term fuel trim (bank 1)',
          value: decodedata.calculate_fuel_Trim(hexdata)
        };
      case '07':
        return {
          id: '07',
          name: 'Short term fuel trim (bank 1)',
          value: decodedata.calculate_fuel_Trim(hexdata)
        };
      case '08':
        return {
          id: '08',
          name: 'Short term fuel trim (bank 1)',
          value: decodedata.calculate_fuel_Trim(hexdata)
        };
      case '09':
        return {
          id: '09',
          name: 'Short term fuel trim (bank 1)',
          value: decodedata.calculate_fuel_Trim(hexdata)
        };
      case '0A':
        return {
          id: '0A',
          name: 'Fuel pressure (gauge pressure)',
          value: decodedata.calculate_fuel_Pressure(hexdata)
        };
      case '0B':
        return {
          id: '0B',
          name: 'Intake manifold absolute pressure',
          value: decodedata.intake_manifold_absolute_pressure(hexdata)
        };
      case '0C':
        return {
          id: '0C',
          name: 'Engine speed',
          value: decodedata.calculateEngineSpeed(hexdata)
        };
      case '0D':
        return {
          id: '0D',
          name: 'Vehicle speed',
          value: decodedata.cal_vechile_Speed(hexdata)
        };
      case '0E':
        return {
          id: '0E',
          name: 'Timing advance',
          value: decodedata.cal_timing_Advance(hexdata)
        };

      case '0F':
        return {
          id: '0F',
          name: 'Intake air temperature',
          value: decodedata.cal_intake_air_temp(hexdata)
        };
      case '10':
        return {
          id: '10',
          name: 'Mass air flow sensor air flow rate',
          value: decodedata.cal_mass_air_flow(hexdata)
        };
      case '11':
        return {
          id: '11',
          name: 'Throttle position',
          value: decodedata.cal_throttle_position(hexdata)
        };
      case '12':
        return {
          id: '12',
          name: 'Commanded secondary air status',
          value: decodedata.comanded_secondary_air_status(hexdata)
        };

      case '13':
        return {
          id: '13',
          name: 'Oxygen sensors present (2 banks)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '14':
        return {
          id: '14',
          name: 'Oxygen sensor 1 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '15':
        return {
          id: '15',
          name: 'Oxygen sensor 2 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '16':
        return {
          id: '16',
          name: 'Oxygen sensor 3 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '17':
        return {
          id: '17',
          name: 'Oxygen sensor 4 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '18':
        return {
          id: '18',
          name: 'Oxygen sensor 5 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '19':
        return {
          id: '19',
          name: 'Oxygen sensor 6 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '1A':
        return {
          id: '1A',
          name: 'Oxygen sensor 7 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '1B':
        return {
          id: '1B',
          name: 'Oxygen sensor 8 (voltage)',
          value: decodedata.cal_oxigen_senV(hexdata)
        };
      case '1C':
        break;
      case '1D':
        break;
      case '1E':
        break;
      case '1F':
        return {
          id: '1F',
          name: 'Run time since engine start',
          value: decodedata.cal_run_time_engine_start(hexdata)
        };


      //==============================================================================================================================///   PID 61 -7F OR 80

      case '61':
        return {
          id: '61',
          name: 'Drivers demand engine - percent torque',
          value: decodedata.drivers_demand_engine_precent_torque(hexdata)
        };

      case '62':
        return {
          id: '62',
          name: 'Actual engine - percent torque',
          value: decodedata.actual_engine_percent_torque(hexdata)
        };
      case '63':
        return {
          id: '63',
          name: 'Engine reference torque',
          value: decodedata.engine_refernce_torque(hexdata)
        };

      case '64':
        return {
          id: '64',
          name: 'Engine percent torque data',
          value: decodedata.engine_percent_torque_data(hexdata)
        };

      case '65':
        return {
          id: '65',
          name: 'Auxiliary input / output supported',
          value: decodedata.auxillory_input_output_support(hexdata)
        };


      case '66':
        return {
          id: '66',
          name: 'Mass air flow sensor',
          value: decodedata.mass_air_flow_sensor(hexdata)
        };

      case '67':
        return {
          id: '67',
          name: 'Engine coolant temperature 1',
          value: decodedata.engine_colent_sensor_1(hexdata)
        };

      case '68':
        return {
          id: '68',
          name: 'Intake air temperature sensor 1',
          value: decodedata.intake_air_temperture_sensor_1(hexdata)
        };

      
      case '7C':
        return {
          id: '7C',
          name: 'Diesel Particulate filter (DPF) temperature',
          value: decodedata.diesel_particulate_filter_temperture(hexdata)
        };



      default:
        console.error(`Unknown PID: ${hexdata.slice(0, 2)}`);
        return null;
    }
  }
}
