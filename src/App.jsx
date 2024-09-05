import "./App.css";
import Item from "./components/Item";
import { itemsContext } from "./context/ItemsContext";
import { useContext } from "react";
function App() {
  const itemsContextValue = useContext(itemsContext);
  itemsContextValue.items.forEach((element) => {
    console.log("name", element.name);
    console.log("price", element.price);
  });

  return (
    <>
      <h1 className="bg-black text-white font-bold text-4xl text-center p-3">
        Amazon
      </h1>
      {itemsContextValue.items.map(({ name, price }) => (
        <>
          {/* <h1>{price}</h1>;<h2>{name}</h2>; */}
          <Item name={name} price={price} />
        </>
      ))}
    </>
  );
}

export default App;
