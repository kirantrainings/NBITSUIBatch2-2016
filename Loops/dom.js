function readData(){
    var firstName= document.getElementById("txtFirstName");
    var gender= document.getElementById("genderMale");
    console.log(firstName.value);
    console.log(gender.selected);
}

readData();