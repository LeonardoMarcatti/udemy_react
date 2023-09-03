import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useAppDispatch } from './store/hook';
import {add, del, amount} from './store/store'

function App() {
  const dispatch = useAppDispatch();

  const plus = () => {
    dispatch(add())
  }

  const minus = () => {
    dispatch(del())
  }

  const increment = (p: number) => {
    dispatch(amount(p))
  }
  return (
    <div className="body">
        <Counter/>
        <div>
          <Button txt="Add" className='add' onClick={plus} />
          <Button txt="Minus" className='minus' onClick={minus}/>
          <Button txt="Increase" className='increase' onClick={() => increment(5)} />
        </div>
    </div>
  );
}

export default App;
