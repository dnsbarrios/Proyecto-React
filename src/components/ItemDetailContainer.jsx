import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((res) => setItem(res))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading)
    return (
      <section className="container">
        <Loading text="Cargando producto..." />
      </section>
    );
  if (!item)
    return (
      <section className="container">
        <h2>Producto no encontrado</h2>
      </section>
    );

  return (
    <section className="container">
      <ItemDetail item={item} />
    </section>
  );
}
