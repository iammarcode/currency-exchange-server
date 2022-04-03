import * as express from 'express'
import { Application } from 'express'

class App {
    public app: Application
    public port: number | string

    constructor(appInit: { port: number | string; middleWares: any; controllers: any }) {
        this.app = express.default()
        this.port = appInit.port
        this.middlewares(appInit.middleWares)
        this.controllers(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleware: any) => void) => void }): void {
        middleWares.forEach((middleware) => {
            this.app.use(middleware)
        })
    }

    public controllers(controllers: { forEach: (arg0: (controller: any) => void) => void }): void {
        controllers.forEach((controller) => {
            new controller(this.app)
        })
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening on http://localhost:${this.port}`)
        })
    }
}

export default App
