import { Router, Request, Response, Application, NextFunction } from 'express'
import { BaseController } from './base/baseController'
import Constants from '../constants/constants'
import axios from 'axios'
import { CryptoItemType } from '../models/types'
import { CryptoModel, ResDataModel } from '../models/model'
import { ErrorCode, ErrorStatus } from '../constants/errorCode'

const config = {
    headers: {
        [Constants.COINMARKETCAP_API_KEY_NAME]: Constants.COINMARKETCAP_API_KEY_VALUE,
    },
}

export class CryptosController extends BaseController {
    public router = Router()

    constructor(app: Application) {
        super(app, '/cryptos')
    }

    public initRoutes(): void {
        this.router.post('/list', this.volatileList)
        this.router.get('/test', this.test)
    }

    public async volatileList(req: Request, res: Response): Promise<void> {
        let { currency } = req.body
        let dataList: CryptoItemType[]
        let resList: CryptoModel[]
        let resData: ResDataModel = new ResDataModel(ErrorStatus.Success, ErrorCode.Success, [])

        try {
            if (!currency) {
                currency = 'USD'
            } else if (!Constants.VALID_CURRENCY_LIST.includes(currency)) {
                resData.code = ErrorCode.InvalidParams
                resData.status = ErrorStatus.InvalidParams
                res.status(ErrorStatus.InvalidParams).send(resData)
                return
            }

            const response = await axios.get(
                Constants.COINMARKETCAP_API_HOST + `${Constants.COINMARKETCAP_API_LIST_PATH}?convert=${currency}`,
                config,
            )

            if (response.data && Array.isArray(response.data.data)) {
                dataList = response.data.data.filter(
                    (item: CryptoItemType) => Math.abs(item.quote[currency].percent_change_24h) > 0.05,
                )

                resList = dataList.map((item: CryptoItemType) => {
                    return new CryptoModel(
                        item.id,
                        item.name,
                        item.symbol,
                        currency,
                        item.quote[currency].price,
                        item.quote[currency].percent_change_24h,
                    )
                })
                resData.data = resList
            } else {
                resData.code = ErrorCode.UnknownError
                resData.status = ErrorStatus.UnknownError
            }

            res.status(ErrorStatus.Success).send(resData)
        } catch (e) {
            resData.code = ErrorCode.NotFound
            resData.status = ErrorStatus.NotFound
            res.status(ErrorStatus.NotFound).send(resData)
        }
    }

    public test(req: Request, res: Response): void {
        res.send('Hello world!')
    }
}

export default CryptosController
