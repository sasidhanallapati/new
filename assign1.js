var company = new Object(); 
company.name = "Facebook" ;
company.ceo.firstName = "mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("company ceo is :"+company.ceo.firstName);
console.log(company["name"]);
var stockPropName = "stock of company" ;
console.log(company["stock of company"]);
company["stock of company"] = 110;
console.log("stock price is :"+company["stock of company"]);
var microsoft = {
    name: "MS",
    ceo: {
        firstName: "satya"
    },
};
var facebook = {
    name:"Facebook",
    ceo: {
        firstName:"Mark",
        secondName:"zuckerburg",
    },
    "stock of company":100
};
console.log(facebook.ceo.firstName);
console.log(facebook.ceo.secondName);
console.log(microsoft.ceo.firstName);
