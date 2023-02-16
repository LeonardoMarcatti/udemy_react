import React, { useState } from "react";

import styles from "./styles.module.css";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    const {value} = event.target;

    if (value === "") {
      setFilterList(list);
      return;
    }
    
    const filteredValues = list.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setFilterList(filteredValues);
  };

  return (
    <div className={`${styles.app}`}>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default App;