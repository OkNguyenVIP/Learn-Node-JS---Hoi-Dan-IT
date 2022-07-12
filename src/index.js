const express = require('express')
import configViewEngine from './configs/viewEngine'
import initWebRouter from './router/web'
const path = require('path')
require('dotenv').config();

const app = express()

// Nếu <process.env.PORT> bị lỗi thì sẽ dùng port 8080
const port = process.env.PORT || 8080

configViewEngine(app);
initWebRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})