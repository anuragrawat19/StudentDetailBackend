// express for creating server-side web applications 
var express  = require('express')
    app = express()
    port = process.env.PORT || 8000;
    mongoose  = require('mongoose'),
    Student   = require('./api/models/studentmodel'), //Student model loaded here
    bodyParser = require('body-parser');

// Mongoose url connections
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Studentdb')


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });


var routes = require('./api/routes/studentroute'); //Import the rouets for students

routes(app); //Register the routes

app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);
console.log("Site server started on port : " +port);