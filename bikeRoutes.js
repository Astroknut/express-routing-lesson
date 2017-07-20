const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
	res.send("You made a request to GET /bikes!");
});

router.get('/:id', function(req,res) {
	res.send("You made a request to get THIS bike!");
});

router.get('/new', function(req,res) {
	res.send("Make a new bike!");
});

router.post('/', function(req,res) {
	res.send("You made a new bike! ");
});

router.get('/:id/edit', function(req,res) {
	res.send("You're changing a bike!");
});

router.put('/:id', function(req,res) {
	res.send("You changed a bike!");
});

router.delete('/:id', function(req,res) {
	res.send("You deleted a bike!");
});

request('localhost:3000/bikes/', function(error, repsonse, body) {
	JSON.parse(body);
})
module.exports = router;