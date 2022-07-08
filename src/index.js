const express = require('express')
import configViewEngine from './configs/viewEngine'
const path = require('path')

const app = express()
const port = 3000

configViewEngine(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ejs', (req, res) => {
    res.render('index.ejs')
})

app.get('/info', (req, res) => {
    res.send('Xin chào! Tôi là OkNguyen!')
})

app.get('/oknguyen', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})