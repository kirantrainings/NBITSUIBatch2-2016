function bindDataToLabels(){
    var firstName=document.getElementById("lblFirstName");
    var lastName= document.getElementById('lblLastName');
    var yearOrBirth = document.getElementById("lblYearOfBirth");
    firstName.innerHTML="First Name :";
    lastName.innerHTML="Last Name :";
    yearOrBirth.innerHTML="Birth Year:";
    firstName.className="lbl-control";
   
    firstName.style="background-color:red";
}

function loadDataInTextBoxes(){
    
    var firstName=document.getElementById("txtFirstName");
    var lastName=document.getElementById("txtLastName");
    firstName.value="Kiran";
    lastName.value="PVS";
}

function buildYearDropDown(){
    
    var currentYear=new Date().getFullYear()+1;
    
    var ddlYear = document.getElementById("ddlYear");
    for(var i=2006;i<=currentYear;i++){
        var optionTag = document.createElement("option");
        optionTag.value= i-2000;
        optionTag.textContent=i;
        ddlYear.appendChild(optionTag);
    }
    
}

bindDataToLabels();
loadDataInTextBoxes();
buildYearDropDown();