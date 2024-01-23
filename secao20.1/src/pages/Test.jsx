import React from "react";
import { Link } from "react-router-dom";

const testList = [{id: 't1', title: 'Title 1'}]

const Test = () => {
   return <>
      <h1>Test Page</h1>
      {
         React.Children.toArray(
            testList.map(el => <Link to={el.id}>{el.title}</Link>)            
         )
      }
   </>
}

export default Test