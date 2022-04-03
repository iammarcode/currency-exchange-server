import request from 'supertest'
import { Application } from 'express'
import { app } from '../server'

const server: Application = app.app

describe('Check /cryptos/list', function () {
    it('valid currency', function (done) {
        request(server).post('/cryptos/list').send({ currency: 'USD' }).expect(200, done)
    })

    it('invalid currency', function (done) {
        request(server).post('/cryptos/list').send({ currency: 'ss' }).expect(400, done)
    })
})
