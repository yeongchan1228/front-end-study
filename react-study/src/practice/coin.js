import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1> The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loadings...</strong>
      ) : (
        coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
          </li>
        ))
      )}
    </div>
  );
}

export default Coin;
