import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  const handleAdd = () => {
    if (stock === 0) return;
    onAdd?.(qty);
  };

  return (
    <div className="count">
      <div className="count__controls">
        <button onClick={dec} disabled={qty <= 1}>
          −
        </button>
        <span className="count__value">{qty}</span>
        <button onClick={inc} disabled={qty >= stock}>
          +
        </button>
      </div>
      <button className="btn" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
