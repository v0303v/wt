const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create_note', (req, res) => {
    res.render('create_note')
})

<<<<<<< HEAD
app.get('/notes', (req, res) => {
    const notes = ['Note Uno','Note Dos','Note Tres']
    res.render('all_notes', { notes: notes})
})

app.get('/notes/detail', (req, res) => {
    res.render('notes_detail')
})

=======
>>>>>>> aa8e08ff6c416c7e9895fdd60f0d20d0c04620f1
app.listen(8000, err => {
    if (err) throw err
    console.log('App is running ...')
})