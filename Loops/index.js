function printStudentDetails(){
    var students=["Chandu","Ashok","Ranjit","Siva","Ravi"];
    var name="Kiran";
    
    for(var i=0;i<students.length;i++){
        document.write(students[i]);
    }
}

function printStudentDetailsWhile(){
    var students=["kkkk","yyyy","xxx","aaa","bbb"];
    var i=0;
    while(i<students.length){
     document.write("<h1>"+students[i]+"</h1>"); 
        i++;
    }
    
}

printStudentDetails();
printStudentDetailsWhile();