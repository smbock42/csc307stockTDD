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
    portfolio.purchase("AMD", 0);
    expect(portfolio.getShares()).toEqual({});
})

test('purchase -1 stocks',()=>{
    portfolio.purchase("AMD",-1);
    expect(portfolio.getShares()).toEqual({});
})

test('purchase 1 new stock not in portfolio',()=>{
    portfolio.purchase("AMD",1);
    expect(portfolio.getShares()).toEqual({"AMD":1});
})

test('purchase 1 stock with invalid ticker',()=>{
    portfolio.purchase(24,4);
    expect(portfolio.isEmpty()).toBe(true);
})

test('purchase 3 additional stocks to existing stock in portfolio',()=>{
    expect(portfolio.isEmpty()).toBe(true);
    portfolio.purchase("AMD", 3);
    expect(portfolio.isEmpty()).toBe(false);
    expect(portfolio.getShares()).toEqual({"AMD":3});
    portfolio.purchase("AMD",4);
    expect(portfolio.getShares()).toEqual({"AMD":7});
    portfolio.purchase("HI",3);
    expect(portfolio.getShares()).toEqual({"AMD":7,"HI":3})
})

//2.5
test('sell 0 stocks',()=>{
    portfolio.purchase("AMD", 3);
    portfolio.sell("AMD",0);
    expect(portfolio.getShares()).toEqual({"AMD":3})
})

test('sell bad stock',()=>{
    portfolio.purchase("AMD",3);
    portfolio.sell(3,0);
    expect(portfolio.getShares()).toEqual({"AMD":3})
})

test('sell -1 stocks',()=>{
    portfolio.purchase("AMD", 3);
    portfolio.sell("AMD",-1);
    expect(portfolio.getShares()).toEqual({"AMD":3})
})

test('sell 1 stock that is not in portfolio',()=>{
    portfolio.purchase("AMD", 3);
    portfolio.sell("CBS",2);
    expect(portfolio.getShares()).toEqual({"AMD":3})
})

test('sell more stock than a portfolio has',()=>{
    portfolio.purchase("AMD", 3);
    portfolio.sell("AMD",5);
    expect(portfolio.getShares()).toEqual({"AMD":3})
})

test('sell full amount of stock that a portfolio has',()=>{
    portfolio.purchase("AMD", 3);
    portfolio.sell("AMD",3);
    expect(portfolio.getShares()).toEqual({})
})

test('sell less amount of stock than full',()=>{
    portfolio.purchase("AMD",3);
    portfolio.sell("AMD",2);
    expect(portfolio.getShares()).toEqual({"AMD":1})
})

// test('sell more stock than a portfolio has')