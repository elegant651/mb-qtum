const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//Nagle Algorithm off
app.use(function(req,res,next){
	req.connection.setNoDelay(true);
	if (req.url.match(/^\/(css|js|img|font|png|jpg|jpeg|gif|bmp)\/.+/)) {
	} else {
		res.header("Cache-Control", 'private, no-cache, no-store, must-revalidate');
		res.header('Expires', '0');
		res.header('Pragma', 'no-cache');
	}
	respCorsHeader(req,res);
	next();
});

app.options('/api/uploadPhoto', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()
})
app.options('/api/uploadPhotoWithLink', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()
})
app.options('/api/transferOwnership', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()	
})
app.options('/api/transferFrom', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()	
})
app.options('/api/getTotalPhotoCount', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()	
})
app.options('/api/getPhoto', (req,res,next) => {
	respCorsHeader(req,res)
	res.send()
})


function respCorsHeader(req,res) {
	// res.header("Access-Control-Allow-Origin", req.protocol+"://" + apiinfo.origin_domain);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Credentials", true);
	return res;
}

const fs = require('fs')
const key = JSON.parse(fs.readFileSync('./.key', 'utf8'))
// require('./api')(app, key);
require('./privtransfer_api')(app, key)

const server = app.listen(3000, function(){
  console.log('server is running on port 3000')
});
