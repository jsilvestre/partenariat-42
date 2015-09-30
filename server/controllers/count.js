
var Count = require('../models/count');



module.exports.create = function (req, res, next) {
	Count.create(req.body, function (err, newCount) {
		if (err != null && err != undefined) {
			console.error(err);
			res.status(500).send({error: "Count cannot be created"});
		}

		res.status(200).send(newCount);
	});
}

module.exports.destroy = function (req, res, next) {
	Count.find(req.params.id, function (err, count) {
		if (err != null && err != undefined) {
			console.error(err);
			res.status(500).send({error: "Count doesn't exist"});
			return;
		}

		count.destroy(function (err) {
			if (err != null && err != undefined) {
				console.error(err);
				res.status(500).send({error: "Count doesn't be destroy"});
				return;
			}
			res.status(200).send({});
		});
	});
}
