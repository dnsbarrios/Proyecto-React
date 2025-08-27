import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido a Exodo Shoop! " />
      </main>
    </>
  );
}
