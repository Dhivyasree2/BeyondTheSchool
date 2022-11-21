const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var database=require('./database');
const PORT = 3000;
const app = express();
const fileupload=require('express-fileupload');

app.use(bodyParser.json());
app.use(cors())
app.use(fileupload())
app.get('/', function(req, res) {
	res.send('Hello from server')
})
app.get("/getskills",function(req,res){
  const querry="SELECT * FROM psgskill.skills"
  database.query(querry,function(err,data){
      res.send(data)
  })
})

app.post("/thumbnail-upload",function(req,res){
  var file=req.files.thumbnail
  var uploadpath='C:/Users/Santhosh/OneDrive/Desktop/PSG-itech/project/admin-site/front-end/src/assets/video/'+file.name
  file.mv(uploadpath,function(err){
    if(err) {return res.status(500).send(err)};
  })
})
app.post("/uploadvalues",function(req,res){
  var id=req.body.id;
  var skillname=req.body.skillname;
  var filename=req.body.fn;
  var filepath='assets/video/'+filename
  var querry=`INSERT INTO psgskill.uploaddata VALUES("${id}","${skillname}","${filename}","${filepath}",0)`;
  database.query(querry,function(err){
    if(err){
    throw err
    }
  })
})
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
  });