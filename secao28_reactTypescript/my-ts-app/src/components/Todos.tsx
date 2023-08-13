import React from "react";

type Todo = {
  items: {id: number, txt: string}[]
}

const Todos = (props: Todo) => {
  const { items } = props
  console.log(...items);
  
  return (
      <ul>
        {items.map(el => <li key={el.id}>{el.txt}</li>)}
      </ul>
  )
}

// const Todos: React.FC<{ items: Todo[] }> = props =>{
//   return(
//     <>
//        <ul>
//          {props.items.map(el => <li key={el.id}>{el.txt}</li>)}
//        </ul>
//     </>
//   )
// }

export default Todos;