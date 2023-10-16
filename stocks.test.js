import mut from './stocks'

let portfolio;
//2.1
beforeEach(() => {
    //Create new portfolio
    portfolio = new mut.StockPortfolio();
})
test("Shares dictionary should be empty", () =>{
    expect(portfolio.getShares()).toEqual({})
})
//2.2
//isEmpty tests
test('isEmpty should return true',() => {
    expect(portfolio.isEmpty()).toBe(true);
})

test('isEmpty should return false, if there is a stock',()=>{
    portfolio.shares = {"AMC":2};
    expect(portfolio.isEmpty()).toBe(false);
})

//2.3
//uniqueShares tests
test('0 uniqueShares',()=>{
    expect(portfolio.uniqueShares()).toBe(0);
})
test('1 uniqueShares',()=>{
    portfolio.shares={"AMC":10};
    expect(portfolio.uniqueShares()).toBe(1);
})
test('2 uniqueShares',()=>{
    portfolio.shares = {"GME":5,"RBLX":2}
    expect(portfolio.uniqueShares()).toBe(2);
})

//2.4

//purchaseStock
test('purchase 0 stocks',()=>{
    portfolio.purchase()
})

test('purchase -1 stocks')

test('purchase 1 new stock not in portfolio')

test('purchase 1 stock with invalid ticker')

test('purchase 3 additional stocks to existing stock in portfolio')