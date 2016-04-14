//var person = {
//    firstName: "Kiran",
//    lastName: "Paturi"
//};
//person.age = 30;
//var register = {};
//register.companyName = "NBITS";
//register.logo = "";

function person() {
    //public properties of the person class
    this.FirstName = "kiran";
    this.LastName = "Paturi";
    //private or local variable
    var ssn = "123456789900";
    this.getLastFourDigits = function () {
        var lastFour = ssn.substring(ssn.length - 4, ssn.length);
        return lastFour;
    };
}

person.country = "India";

var trainer = new person();
console.log(trainer.FirstName);
console.log(trainer.LastName);
console.log(trainer.getLastFourDigits());
console.log(trainer.country);
console.log(person.country);