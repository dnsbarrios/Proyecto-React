export default function CartWidget({ count = 0 }) {
  return (
    <button className="cart">
      <span className="cart__icon" aria-hidden>
        🛒
      </span>
      {count > 0 && <span className="cart__badge">{count}</span>}
    </button>
  );
}
