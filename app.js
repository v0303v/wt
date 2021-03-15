const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

const notes = require('./db')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create_note', (req, res) => {
    res.render('create_note')
})

app.get('/notes', (req, res) => {
    res.render('all_notes', {notes : notes})
})

app.get('/notes/detail', (req, res) => {
    res.render('notes_detail')
})

app.listen(8000, err => {
    if (err) throw err
    console.log('App is running ...')
})