import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRouter = (app) => {    
    router.get('/',  homeController.getHomepage)

    router.get('/hello', (req, res) => {
        res.send('<h1>Hello World!</h1>')
    })
    
    router.get('/info', (req, res) => {
        res.send('Xin chào! Tôi là OkNguyen!')
    })
    
    router.get('/oknguyen', (req, res) => {
        res.sendFile(path.join(__dirname, "./index.html"))
    })

    return app.use('/', router);
}

export default initWebRouter;