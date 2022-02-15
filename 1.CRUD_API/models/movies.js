const uuid = require('uuid').v4

let movies = [
	{
		'id': uuid(),
		'title': 'Harry Potter and the Philosopher\'s Stone'
	},
	{
		'id': uuid(),
		'title': 'Harry Potter and the Chamber of Secrets'
	},
	{
		'id': uuid(),
		'title': 'Harry Potter and the Prisoner of Azkaban'
	},
]

const getAll = () => {return {"movies": movies}}

const findById = id => movies.find(
	movie => movie.id === id
)

const save = (movie, id) => {
	if(id === undefined) {
		movie.id = uuid()
		movies.push(movie)
	} else {
		movieIndex = movies.findIndex(movie => movie.id === id)
		if(movieIndex === -1)
			return
		movie.id = id
		movies[movieIndex] = movie
	}
	return movie
}

const remove = id => movies = movies.filter(movie => movie.id !== id)

module.exports = {
	getAll,
	findById,
	save,
	remove
}