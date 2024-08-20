import React, {memo} from "react";

const TabButton = memo(function TabButton({ title, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {title}
      </button>
    </li>
  );
})

export default TabButton