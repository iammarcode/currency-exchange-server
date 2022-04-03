export type CryptoItemType = {
    id: string
    name: string
    symbol: string
    quote: { [key: string]: { percent_change_24h: number; price: number } }
}
