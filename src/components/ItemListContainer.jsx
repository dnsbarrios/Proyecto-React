import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products";
import ItemList from "./ItemList";
import Loading from "./Loading";

export default function ItemListContainer({ greeting = "Catálogo" }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((res) => setItems(res))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section className="container">
      <h1>{greeting}</h1>
      {categoryId && (
        <p className="muted">
          Categoria: <b>{categoryId}</b>
        </p>
      )}
      {loading ? (
        <Loading text="Cargando productos..." />
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
}
