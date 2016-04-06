(
    function(){
        console.log(vehicles.Inventory);
        vehicles.Inventory.push({"Year":2017,"Make":"Audi","Model":"900","Price":"250000"});
    
    console.log(window.vehicles.Inventory);
    }
)();