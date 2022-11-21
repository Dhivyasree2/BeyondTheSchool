const mqsql=require('mysql');
 var connection=mqsql.createConnection({
    host:"localhost",
    database:"psgskill",
    user:"root",
    password:"santhosh@2003"
 });
 connection.connect(function(error){
    if(error){
        throw error
    }
    else{
        console.log("db connected successfully")
    }
 });
 module.exports=connection;