const movieModel = require('../models/movies')

module.exports = {
	addNewMovie: (req, res) => {
		res.status(201).send(movieModel.save(req.body))
	},
	getAllMovies: (req, res) => {
		res.send(movieModel.getAll())
	},
	getMovieByID: (req, res) => {
		const movie = movieModel.findById(req.params.movieId)
		res.send(movie === undefined ? 404 : movie)
	},
	updateMovieByID: (req, res) => {
		const result = movieModel.save(req.body, req.params.movieId)
		res.send(result === undefined ? 400 : result)
	},
	deleteMovieByID: (req, res) => {
		const deleted = movieModel.remove(req.params.movieId)
		res.send(deleted ? 204 : 404)
	}
}