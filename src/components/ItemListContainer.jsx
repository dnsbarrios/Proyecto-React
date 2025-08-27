export default function ItemListContainer({ greeting }) {
  return (
    <section className="container">
      <h1>{greeting}</h1>
      <p>No hay productos en el catalogo</p>
    </section>
  );
}
