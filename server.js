if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config({path: './.env'});
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const faqRouter = require('./routes/faq')
const scheduleRouter = require('./routes/schedule')
const sponsorsRouter = require('./routes/sponsors')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// const mongoose = require('mongoose')
// mongoose.connect(process.env.HACKTHECLOUD2_URL, {
// 	useNewUrlParser: true, useUnifiedTopology: true
// })
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/about', aboutRouter)
app.use('/faq', faqRouter)
app.use('/schedule', scheduleRouter)
app.use('/sponsors', sponsorsRouter)

app.listen(process.env.PORT || 3000)
