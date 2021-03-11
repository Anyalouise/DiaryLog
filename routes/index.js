
/*
 * GET home page.
 */
var data = require('../diarylogs.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};