import { createContext, useState } from "react";
export const itemsContext = createContext(null);
export const ItemContextProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "mac book",
      price: "100,000",
    },
    {
      name: "oppo phone",
      price: "20000",
    },
    {
      name: "pc",
      price: "20000",
    },
    {
      name: "cloth",
      price: "10000",
    },
  ]);
  return (
    <>
      <itemsContext.Provider value={{ items, setItems }}>
        {props.children}
      </itemsContext.Provider>
    </>
  );
};
