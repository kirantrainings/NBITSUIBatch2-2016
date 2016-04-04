
function buildTable(employee){
  var trEmployee= document.createElement("tr");
  var tableEmployee= document.getElementById("tblEmployee");
   
    var tdId= document.createElement("td");
    var tdName= document.createElement("td");
    tdId.innerHTML=employee.id;
    tdName.innerHTML=employee.firstName;
   
    trEmployee.appendChild(tdId);
    trEmployee.appendChild(tdName);
    
    tableEmployee.appendChild(trEmployee);
}


function getEmployees(){
    var employees=[
        {id:1,firstName:"Kiran"},
        {id:2,firstName:"Ravi"},
        {id:3,firstName:"Chandu"},
    ];
    for(var i=0;i<employees.length;i++){
        buildTable(employees[i]);
    }
}

getEmployees();