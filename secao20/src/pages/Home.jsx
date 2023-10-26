import React from "react";
import Lorem from "../components/Lorem";
import { useNavigate } from "react-router-dom";

const Home = () => {

   const navigate = useNavigate()
   const navigateHandler = () => navigate('/abc')
   
   return (
      <main>
         <h1>Home Page</h1>
         <Lorem />
         <button type="button" onClick={navigateHandler} className="btn btn-danger">Go to Error</button>
      </main>
   )
}

export default Home