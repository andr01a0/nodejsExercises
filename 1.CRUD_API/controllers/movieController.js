const movieModel = require('../models/movies')

module.exports = {
	addNewMovie: (req, res) => {
		res.status(201).send(movieModel.save(req.body))
	},
	getAllMovies: (req, res) => {
		res.send(movieModel.getAll())
	},
	getMovieByID: (req, res) => {
		res.send(movieModel.findById(req.params.movieId))
	},
	updateMovieByID: (req, res) => {
		const result = movieModel.save(req.body, req.params.movieId)
		if(result === undefined)
			res.status(400).send()
		res.send(result)
	},
	deleteMovieByID: (req, res) => {
		movieModel.remove(req.params.movieId)
		res.status(204).send()
	}
}