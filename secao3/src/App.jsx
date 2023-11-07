import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";

const  App = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts data={CORE_CONCEPTS} />
        <Examples data={EXAMPLES} />
      </main>
    </>
  );
}

export default App;
