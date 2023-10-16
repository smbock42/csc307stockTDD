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
    _getInventoryAmount(stock){
        return this.shares[stock];
    }
    sell(ticker,amount){
        if (this._isPositiveNumber(amount) && this._isString(ticker)){
            if (amount < this._getInventoryAmount(ticker)){
                this.shares[ticker] -= amount
            }
            else if (amount === this._getInventoryAmount(ticker)){
                delete this.shares[ticker]
            }
            else {
                throw new ShareSaleException("ShareSaleException");
            }
        }

    }
    stockAmount(ticker){
        if (this._tickerInPortfolio(ticker)){
            return this.shares[ticker]
        }
    }

    removeUnownedStocks(){
        for (const key in this.shares) {
            if (this.shares[key] === 0) {
              delete this.shares[key];
            }
          }
    }
}

class ShareSaleException extends Error {
    constructor(message) {
      super(message);
      this.name = 'ShareSaleException';
    }
  }
  

export default {StockPortfolio}

