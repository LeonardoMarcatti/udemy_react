import React from "react";
import styles from '../styles/styles.module.css'
import MainNavigation from "../components/MainNavigation";

const Error = () => {
   return (
      <div className={`${styles.root}`} >
         <MainNavigation />
         <h1>Error Page</h1>
         <p>The page do not exist!!</p>
      </div>
   )
}

export default Error