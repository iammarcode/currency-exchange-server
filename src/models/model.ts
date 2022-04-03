export class CryptoModel {
    id: string
    name: string
    symbol: string
    currency: string
    price: number
    percent_change_24h: number

    constructor(id: string, name: string, symbol: string, currency: string, price: number, percent_change_24h: number) {
        this.id = id
        this.name = name
        this.symbol = symbol
        this.currency = currency
        this.price = price
        this.percent_change_24h = percent_change_24h
    }
}

export class ResDataModel {
    status: number
    code: string
    data?: CryptoModel[]

    constructor(status: number, code: string, data?: CryptoModel[]) {
        this.status = status
        this.code = code
        this.data = data
    }
}

export class ErrorModel {
    public code: string
    public status: number

    constructor(code: string, status: number) {
        this.code = code
        this.status = status
    }
}
