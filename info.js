console.log("3 persons with there first & last name,address are mentioned below :-");
var person1 = new Object();
person1.address = "D.No:20-64,line 1,Madhapur,Hyderabad";
person1.name = new Object();
person1.name.firstname = "Sasidha";
person1.name.lastname = "Nallapati";
console.log("Person1 Details ::"+
"\n First Name: " +person1.name.firstname  +
"\n Last Name: " +person1.name.lastname +
"\n Office Address: "+person1.address); 

var person2 = new Object();
person2.firstname = "Snigdha";
person2.lastname = "Nallapati";
person2.address = "opp.nmr street,smr apartments,SRNagar,Hyderabad";
console.log("Person2 Details ::"+
"\n First Name: "+person2.firstname +
"\n Last Name: "+person2.lastname +
"\n Office Address: "+person2.address);

var person3 = {
    name:{
        firstname:"Manju",
        lastname:"latha",
    },
    address: "Peace Colony,houseno.:362,Kukatpally,Hyderabad",
};
console.log("Person3 Details ::"+
"\n First Name: "+person3.name.firstname+
"\n Last Name: "+person3.name.lastname+
"\n Office Address: "+person3.address)
