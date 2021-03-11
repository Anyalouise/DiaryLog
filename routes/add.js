var data = require("../diarylogs.json");

exports.addEntry = function(request, response) {    
	// Your code goes here
	var jsonName = {
		"entry":request.query.entry,
		"description":request.query.description,
		"imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oiC-JqN3IxUN8Xvdz9w-Bhu62wnZnxpLrQ&usqp=CAU"
	}
	data.diaryLogs.push(jsonName);
	console.log(jsonName);

	response.render('index', {
  		"diaryLogs":data['diaryLogs']
  	})

 }