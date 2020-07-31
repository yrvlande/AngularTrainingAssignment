var express = require('express');
var app = express();
var fs = require("fs");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = app.listen(8095, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

app.get("/loginValid", function(req,res) {
  var userID = req.query.userID;
  var userPassword = req.query.userPassword;
  if (userID == 'user' && userPassword == 'user') {
     var successObj = {isValid:true};
     res.end(JSON.stringify(successObj));
  } else {
    var successObj = {isValid:false};
    res.end(JSON.stringify(successObj));
  }

});



app.get("/testDestination",function(req,res){
  console.log("Request entery Point to Server");
      var name = req.query.param1;
	  var age = req.query.param2;
 var obj = {name:name, age:age};
 console.log("------------------------" + req.header);
 console.log("$$$$$$$$$$$$$$$$$$$$$$" +res);
 res.end(JSON.stringify(obj));


});

app.post("/fileUpload", function(req,res){
     console.log(req);
});

app.get("/jsonResponse",function (req,res){
var obj = {name:'yashwant', city:'Pune'};
console.log(obj);
res.end(JSON.stringify(obj));
});

app.get("/txtResponse1",function (req,res){
var obj = {name:'yashwant', city:'Pune'};
res.end("ABC");
});
app.get("/txtResponse2",function (req,res){
var obj = {name:'yashwant', city:'Pune'};
res.end("PQR");
});
app.get("/txtResponse3",function (req,res){
var obj = {name:'yashwant', city:'Pune'};
res.end("XYZ");
});

app.get("/txtResponse4",function (req,res){
var obj = {name:'yashwant', city:'Pune'};
res.end("XYZ");
});
app.get("/getJson", function(req,res){
      var json = require("C:/development/Angular1/server/json/phones.json");
	     res.end(JSON.stringify(json));
});

app.post("/getJson1", function(req,res){
      var json = require("C:/development/Angular1/server/json/phones.json");
	     res.end(JSON.stringify(json));
});

app.post("/post1", function(req,res){

          console.log(req.query.account);

      var json = require("C:/development/Angular1/server/json/phones.json");
	     res.end(JSON.stringify(json));
});

app.get("/employees",function (req,res){
var json = require("C:/development/Angular1/server/json/employees.json");
	     res.end(JSON.stringify(json));
});

app.get("/empByID",function (req,res){
  var id = req.query.param1;
  var employee;
var employees = require("C:/development/Angular1/server/json/employees.json");
 for(var emp of employees){
         if(emp['id'] == id){
          employee = emp;
        }
      }
       res.end(JSON.stringify(employee));
});

app.get("/updateEmployee",function(req,res){
    var empJsonFile = 'C:/development/Angular1/server/json/employees.json';
    var empID = req.query.param1;
    var empName = req.query.param2;
    var employees = require("C:/development/Angular1/server/json/employees.json");
    console.log(empID +'----------------------------------------' + empName)
    var objIndex = employees.findIndex((obj => obj.id == empID));
    console.log(objIndex);
    employees[objIndex].name = empName;

     console.log("%%%%%%%%%%%%%%%%%%" + employees[objIndex].name);

    for(var emp of employees){

    }

//   fs.writeFile(empJsonFile, JSON.stringify(employees), function (err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(employees));
//   console.log('writing to ' + empJsonFile);
// });

  res.end(JSON.stringify(employees));
})


