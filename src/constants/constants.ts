import config from '../config/config'
import { currency } from './currency'

class Constants {
    static NODE_ENV: string = process.env.NODE_ENV || 'development'
    static NODE_PORT: number | string = process.env.NODE_PORT || config.port
    static COINMARKETCAP_API_HOST: string = 'https://pro-api.coinmarketcap.com'
    static COINMARKETCAP_API_LIST_PATH: string = '/v1/cryptocurrency/listings/latest'
    static COINMARKETCAP_API_KEY_NAME: string = 'X-CMC_PRO_API_KEY'
    static COINMARKETCAP_API_KEY_VALUE: string = process.env.API_KEY || '5b7ff6a7-5aeb-4d77-975c-870f6afa8b92'
    static VALID_CURRENCY_LIST: string[] = currency
}

Object.seal(Constants)
export = Constants
