var data = require("../data.json");

exports.addFriend = function(request, response) {

	// Get data from form and create new JSON object for new friend
	let newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		// Used picsum photo to prevent any errors using lorempixel
		"imageURL": "https://picsum.photos/id/1005/500"
	};

	// Add new friend to friends array in the data JSON object
	data.friends.push(newFriend);

	// Render index.handlebars to display the new friend added at the bottom
	response.render('index', data);
};