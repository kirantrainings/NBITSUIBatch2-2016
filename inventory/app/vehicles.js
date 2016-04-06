(
    function(vehicles){
     if(!vehicles){
        vehicles= window.vehicles={};
     }
        vehicles.Inventory=[{"Year":2014,"Make":"Audi","Model":"A5","Price":"250000"},
                 {"Year":2015,"Make":"Benz","Model":"C2000","Price":"1000000"},
                 {"Year":2016,"Make":"Jaguar","Model":"J100","Price":"200000"}]
    }
)(window.vehicles={});