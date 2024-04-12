import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [currentOrder, setCurrentOrder] = useState("ascending");
  const [changOrderButtonLabel, setChangOrderButtonLabel] = useState(
    "change to descending order"
  );

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrderHandler = useCallback(() => {
    if (changOrderButtonLabel === "change to descending order") {
      setChangOrderButtonLabel("change to ascending order");
      setCurrentOrder("descending");
    } else {
      setChangOrderButtonLabel("change to descending order");
      setCurrentOrder("ascending");
    }
  }, [changOrderButtonLabel]);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={listItems}
        currentOrder={currentOrder}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{changOrderButtonLabel}</Button>
    </div>
  );
}

export default App;
