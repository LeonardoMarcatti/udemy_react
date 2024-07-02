import React from "react";
import Accordion from "./components/accordion/Accordion";
import Item from "./components/accordion/Item";

const App = () => {
  return <main>
      <h1>React Patterns & Practices</h1>
    <section>
      <h2>Why work for us?</h2>
      <Accordion className="accordion">
        <Item title="We got some experience"  className="accordion-item">
        <article>
          <p>You cant go wrong with us!</p>
          <p>We are for true!</p>
        </article>
        </Item>
        <Item title="We got some experience" className="accordion-item">
        <article>
          <p>Great Experience</p>
          <p>Feel the emotions</p>
        </article>
        </Item>
        <Item title="We got some experience" className="accordion-item">
        <article>
          <p>We are fast</p>
          <p>Lighting fast!</p>
        </article>
        </Item>
      </Accordion>
    </section>
  </main> 
}

export default App;
