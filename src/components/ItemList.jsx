import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  if (!items?.length) return <p>No Existe ese producto</p>;
  return (
    <div className="grid">
      {items.map((it) => (
        <ItemCard key={it.id} item={it} />
      ))}
    </div>
  );
}
