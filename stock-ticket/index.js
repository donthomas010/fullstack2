import { getStockData } from "./fakeStock.js";

setInterval(function () {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);

let lastPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceImg = document.getElementById("price-img");
  const stockDisplayDate = document.getElementById("Date");

  const { name, symbol, price, date } = stockData;

  const status =
    lastPrice < price ? "Bull" : lastPrice > price ? "bear" : "same";
  stockDisplayName.textContent = name;
  stockDisplaySymbol.textContent = symbol;
  stockDisplayPrice.textContent = price;
  stockDisplayPriceImg.textContent = status;
  stockDisplayDate.textContent = date;

  lastPrice = price;
}
const value = getStockData().price < 2 ? "good" : "bad";
console.log(value);
