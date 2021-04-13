if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config({path: './.env'});
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

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

app.get('/', (req, res) => {
	return res.render('index');
});
app.get('/about', (req, res) => {
	return res.render('about');
});
app.get('/faq', (req, res) => {
	return res.render('faq');
});
app.get('/schedule', (req, res) => {
	return res.render('schedule');
});
app.get('/sponsors', (req, res) => {
	return res.render('sponsors');
});
app.get('/register', (req, res) => {
	return res.redirect('https://event.hackhub.com/event/htc2');
});

app.listen(process.env.PORT || 3000);
