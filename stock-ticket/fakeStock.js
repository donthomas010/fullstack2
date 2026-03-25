export function getStockData() {
  return {
    name: "stock12",
    sym: "stk",
    price: (Math.random() * 3).toFixed(2),
    date: new Date().toLocaleTimeString(),
  };
}
