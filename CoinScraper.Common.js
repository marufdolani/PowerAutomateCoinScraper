var CoinScraper = CoinScraper || {};
CoinScraper.Common = CoinScraper.Common || {};

CoinScraper.Common = (function () {
    var GetCoinbasePrices = function(){
        var mylist = [];
        var retObj = {};
        var excelData = [];
        
        document.querySelector("table[class^='AssetTable']").querySelectorAll("svg[filled='1']").forEach((itm)=>
        {
            let obj={};
        
            obj.Name = itm.parentElement.parentElement.parentElement.querySelector('h1').innerText;
            obj.Ticker = itm.parentElement.parentElement.parentElement.querySelector('h1').innerText;
            obj.Price = itm.parentElement.parentElement.parentElement.querySelector("td>h5").innerText;
            obj.Date = new Date().now;
            mylist.push(obj);
        
            retObj[obj.Ticker] = obj.Price;
        });
        
        //ETH ADA XLM MATIC ALGO
        excelData.push(retObj["ETH"].replace("$",""));
        excelData.push(retObj["ADA"].replace("$",""));
        excelData.push(retObj["XLM"].replace("$",""));
        excelData.push(retObj["MATIC"].replace("$",""));
        excelData.push(retObj["ALGO"].replace("$",""));
        excelData.push(retObj["BTC"].replace("$",""));
        
        return JSON.stringify(excelData);    
    };
    return { GetCoinbasePrices};
})();