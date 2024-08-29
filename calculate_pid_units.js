class Calculate_PIds{


    // pid-[8D]
    calculate_throtle_position_G(hexData){
        let hex1 = hexData.slice(0,2)
        let val1 = parseInt(hex1,16)

        let result =  1/2.55 * val1

        return `${result} %`
    }


     // pid-[8E]
     calculate_engine_friction_torque(hexData){
        let hex1 = hexData.slice(0,2)
        let val1 = parseInt(hex1,16)

        let result = val1 - 125

        return `${result} %`
    }



         // pid-[A2]
         calculate_cylinder_fuel_rate(hexData){


            let hex1 = hexData.slice(0,2)
            let hex2 = hexData.slice(2,4)
    
            let val1 = parseInt(hex1,16)
            let val2 = parseInt(hex2, 16)
    
            let result =  (256 * val1 + val2) / 32
    
    
            // console.log("fuel rail pressure in kilo pascaluel_rail_pressure " + result + "kPa");
    
            return `${result} mg/stroke`
    
    
        }


           // pid-[A4]
           calculate_transmission_actual_gear(hexData){


            let hex1 = hexData.slice(0,2)
            let hex2 = hexData.slice(2,4)
    
            let val1 = parseInt(hex1,16)
            let val2 = parseInt(hex2, 16)
    
            let result =  	(256 * val1 + val2) /1000
    
    
            // console.log("fuel rail pressure in kilo pascaluel_rail_pressure " + result + "kPa");
    
            return `${result} ratio`
    
    
        }

              // pid-[A5]
              calculate_commanded_diesel_exhaust_fluid_dosing(hexData){


                let hex1 = hexData.slice(0,2)
                // let hex2 = hexData.slice(2,4)
        
                let val1 = parseInt(hex1,16)
                // let val2 = parseInt(hex2, 16)
        
                let result =  val1/2  
        
        
                // console.log("fuel rail pressure in kilo pascaluel_rail_pressure " + result + "kPa");
        
                return `${result} %`
        
        
            }

            // pid-[A6]

            calculate_odometer(hexData){

                let hex1 = hexData.slice(0,2)
                let hex2 = hexData.slice(2,4)
                let hex3 = hexData.slice(4,6)
                let hex4 = hexData.slice(6,8)

        
                let val1 = parseInt(hex1,16)
                let val2 = parseInt(hex2, 16)
                let val3 = parseInt(hex3, 16)
                let val4 = parseInt(hex4, 16)

                let result = (val1* (Math.pow(2,24)) + val2 * (Math.pow(2,16)) + val3 * (Math.pow(2,8)) + val4)/10

                return `${result} km`


            }




}


// let calculate = new Calculate_PIds()

// let hexData = "12345678"


// let output = calculate.calculate_throtle_position_G(hexData)

// let output = calculate.calculate_engine_friction_torque(hexData)

// let output = calculate.calculate_cylinder_fuel_rate(hexData)

// let output = calculate.calculate_transmission_actual_gear(hexData)
// let output = calculate.calculate_commanded_diesel_exhaust_fluid_dosing(hexData)
// let output = calculate.calculate_odometer(hexData)


// console.log(output);