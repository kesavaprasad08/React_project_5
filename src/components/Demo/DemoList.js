import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { currentOrder } = props;
  const { items } = props;

  let isAsc = false;
  if (currentOrder === "ascending") {
    isAsc = true;
  } else {
    isAsc = false;
  }

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    if (!isAsc) {
      return items.sort((a, b) => b - a);
    } else if (isAsc) {
      return items.sort((a, b) => a - b);
    }
  }, [items, isAsc]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
