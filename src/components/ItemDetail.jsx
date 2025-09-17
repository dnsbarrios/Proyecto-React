import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const handleAdd = (qty) => {
    console.log("Agregar al carrito:", item.title, "x", qty);
    alert(`Agregado: ${item.title} x ${qty}`);
  };

  return (
    <div className="detail">
      <img className="detail__img" src={item.image} alt={item.title} />
      <div className="detail__info">
        <h2 className="detail__title">{item.title}</h2>
        <p className="detail__desc">{item.description}</p>
        <p className="detail__price">${item.price}</p>
        <p className="muted">Stock: {item.stock}</p>

        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}
