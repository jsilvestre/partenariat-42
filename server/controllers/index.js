
var Count = require('../models/count');

module.exports.index = function (req, res, next) {
	Count.all(function (err, listCount) {
		//if (err == null || err == undefined) {
			//res.status(500).send({error: 'Failed retrieve data'});
		//}
		res.render('index.jade',
				{imports: 'window.listCount = ' + JSON.stringify(listCount) + ''});
	});

};
