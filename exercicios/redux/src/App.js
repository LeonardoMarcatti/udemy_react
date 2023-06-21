import style from './App.module.css'
import Counter from './components/Counter';

function App() {
  return (
    <div className={style.app}>
      <Counter/>
    </div>
  );
}

export default App;
