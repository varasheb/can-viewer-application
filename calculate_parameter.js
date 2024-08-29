 class CalculateParameters{

    //pid-[21]
    calculate_distance_travelled_with_malfuction_indicator_lamp(hexData){

        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)
        let result = 256 * (val1) + val2
        
        
        // console.log("distance travelled with malfuction indicator lamp in kilometer" + result +"km");

        return `${result} km`
    }

   //pid-[22]

    calculate_fuel_rail_pressure(hexData){


        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)

        let result =  0.079 * (256 * (val1)+val2)


        // console.log("fuel rail pressure in kilo pascaluel_rail_pressure " + result + "kPa");

        return `${result} kPa`


    }

    //pid-[23]


    calculate_fuel_rail_gauge_pressure(hexData){

        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)

        let result =  10 * (256 * (val1)+val2)

        // console.log("fuel rail gauge pressure in kilo pascaluel_rail_pressure " + result + "kPa");

        return `${result} kPa`


    }

    //pid-[24 to 29] and pid-[2A and 2B]


    calculate_oxygen_sensor_ratio_voltage(hexData){


        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)

        let result = 2/65536 * (256 * (val1) + val2)

        // console.log("oxygen sensor voltage ratio " + result + "V");

        return `${result} V`


    }


        //pid-[2C]

    calculate_commanded_EGR(hexData){

        let hex1 = hexData.slice(0,2)

        let val1 = parseInt(hex1,16)

        let result =100/255 * (val1)

        // console.log("commanded EGR in percentage" + result + "%") ;

        return `${result} %`



    }


    //pid-[2D]

    calculate_EGR_Error(hexData){

        let hex1 = hexData.slice(0,2)

        let val1 = parseInt(hex1,16)

        let result =(100/128 * (val1))-100

        // console.log("commanded EGR in percentage" + result + "%") ;

        return `${result} %`



    }


        //pid-[2E]

    // Commanded evaporative purge

    calculate_commanded_evaporative_purge(hexData){

        let hex1 = hexData.slice(0,2)

        let val1 = parseInt(hex1,16)

        let result =100/255 * (val1)

        // console.log("commanded Evaporative purge in percentage" + result + "%") ;

        return `${result} %`





    }

        //pid-[2F]


    calculate_fuel_tank_level_input(hexData){

        let hex1 = hexData.slice(0,2)

        let val1 = parseInt(hex1,16)

        let result =100/255 * (val1)

        // console.log("Fuel Tank Level Input in percentage" + result + "%") ;

        return `${result} %`



    }

        //pid-[31]


    calculate_distance_traveled_since_codes_cleared(hexData){


        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)
        let result = 256 * (val1) + val2

        // console.log("distance travelled since codes cleared in kilometer" + result +"km");

        return `${result} km`

    }



    //pid-[32]



    calculate_Evap_system_vapour_pressure(hexData){


        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)
        let result = (256 * (val1) + val2)/4

        // console.log("Evap system vapour pressure in pascal" + result +"Pa");

        return `${result} Pa`

    }


        //pid-[33]


    calculate_absolute_barometric_pressure(hexData){


        let hex1 = hexData.slice(0,2)

        let val1 = parseInt(hex1,16)
        let result = (val1)

        // console.log("Absolute Barometric Pressure" + result +"kPa");

        return `${result} kPa`

    }


        //pid-[34 to 39] and pid-[3A and 3B]    


    calculate_oxygen_sensor_ratio_current(hexData){


        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2, 16)

        let result = 2/65536 * (256 * (val1) + val2)

        // console.log("oxygen sensor current ratio " + result + "mA");

        return `${result} mA`


    }

    // pid-[3C and 3F]

    calculate_catalyst_temperature(hexData){
        let hex1 = hexData.slice(0,2)
        let hex2 = hexData.slice(2,4)

        let val1 = parseInt(hex1,16)
        let val2 = parseInt(hex2,16)

        let result = ((256 *val1 + val2)/10)-40

        // console.log("catalyst temparature in celcius" + result + "c");

        return `${result} c`

    }



}

let calculate = new CalculateParameters()

let hexData = "1234";

// let distance = calculate.calculate_distance_travelled_with_malfuction_indicator_lamp(hexData);


// let distance = calculate.calculate_fuel_rail_pressure(hexData)

// let distance = calculate.calculate_fuel_rail_gauge_pressure(hexData)

//    let distance = calculate.calculate_oxygen_sensor_ratio_voltage(hexData)


// let distance = calculate.calculate_commanded_EGR(hexData)

// let distance = calculate.calculate_EGR_Error(hexData)
// let distance = calculate.calculate_commanded_evaporative_purge(hexData)
// let distance = calculate.calculate_fuel_tank_level_input(hexData)

// let distance = calculate.calculate_distance_traveled_since_codes_cleared(hexData)

// let distance = calculate.calculate_Evap_system_vapour_pressure(hexData)
// let distance = calculate.calculate_absolute_barometric_pressure(hexData)


// let distance = calculate.calculate_oxygen_sensor_ratio_current(hexData)

let distance = calculate.calculate_catalyst_temperature(hexData)








console.log(distance);
