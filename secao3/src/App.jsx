import Header from "./components/Header";

const App = () => {
   const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

   const genRandomInt = (max) => Math.floor(Math.random() * (max + 1));
   return (
      <div>
         <Header/>
         <main>
            <h2>Time to get started!</h2>
         </main>
      </div>
   );
}

export default App;
