module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	})
	// post route for adding a data from a survey
	app.post('/results', function(req, res) {
		submitted_info = {
			name: req.body.name,
			cakes: req.body.cakes,
			circle: req.body.circle,
			argue: req.body.argue
		};
	 	res.render("results",{user_data: submitted_info});
	})
};
