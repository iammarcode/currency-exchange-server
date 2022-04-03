import express from 'express'
import App from './app'
import Constants from './constants/constants'
import loggerMiddleware from './middleware/logger/logger'
import errorHandler from './middleware/errorHandler/errorHandler'
import CryptosController from './controllers/cryptosController'

export const app = new App({
    port: Constants.NODE_PORT,
    controllers: [CryptosController],
    middleWares: [express.json(), express.urlencoded({ extended: false }), loggerMiddleware, errorHandler],
})

app.listen()
