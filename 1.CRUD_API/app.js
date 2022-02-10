const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const movieController = require('./controllers/movieController')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// express default index page
app.use('/', indexRouter)

// CRUD Movies API routing
app.route("/movies")
  .get(movieController.getAllMovies)
  .post(movieController.addNewMovie)

app.route("/movies/:movieId")
  .get(movieController.getMovieByID)
  .put(movieController.updateMovieByID)
  .delete(movieController.deleteMovieByID)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error', { title: 'error' })
})

// server running on PORT 3000
// run by using command: npm run start
module.exports = app
