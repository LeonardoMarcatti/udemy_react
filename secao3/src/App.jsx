import CoreConcepts from "./components/Coreconcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

const App = () => {
   const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential', 'Important', 'Main', 'Modern', 'Up to date'];
   const genRandomInt = (max) => Math.floor(Math.random() * max);
   const word = reactDescriptions[genRandomInt(8)]

   return (
      <div>
         <Header word={word}/>
         <main>
            <section id="core-concepts">
               <h2>Core Concepts</h2>
               <ul>
                  {
                     CORE_CONCEPTS.map((el, i) => {
                        return <CoreConcepts title={el.title} img={el.image} description={el.description} key={i}/>
                     })
                  }
               </ul>
            </section>
            
         </main>
      </div>
   );
}

export default App;
