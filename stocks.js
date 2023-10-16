export class StockPortfolio {
    constructor() {
        this.shares = {};
    }
    getShares(){
        return this.shares;
    }
    isEmpty(){
        return Object.keys(this.shares).length === 0;
    }
    uniqueShares(){
        return Object.keys(this.shares).length;
    }
    _isPositiveNumber(number){
        return Number.isInteger(number) && number > 0
    }
    _isString(string){
        return typeof string === 'string' || string instanceof String

    }
    _tickerInPortfolio(ticker){
        return ticker in this.shares;
    }
    purchase(ticker,amount){
        if (this._isPositiveNumber(amount) && this._isString(ticker)){
            if (this._tickerInPortfolio(ticker)){
                this.shares[ticker] += amount
            }
            else{
                this.shares[ticker] = amount
            }
        }
    }
}

export default {StockPortfolio}