import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <article className="card">
      <img src={item.image} alt={item.title} className="card__img" />
      <div className="card__body">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__price">${item.price}</p>
        <Link className="btn" to={`/item/${item.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
