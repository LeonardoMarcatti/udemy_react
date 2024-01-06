import React from "react";
import List from "../components/List";
import styles from '../styles/styles.module.css'

const Products = () => {
   return (
      <main className={`${styles.root}`} >
         <h1>Products Page</h1>
         <List />
      </main>
   )
}

export default Products