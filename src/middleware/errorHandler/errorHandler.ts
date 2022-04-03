import { Request, Response, NextFunction } from 'express'

//TODO: errorHandler
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('triggering error handler...')
    next()
}

export default errorHandler
