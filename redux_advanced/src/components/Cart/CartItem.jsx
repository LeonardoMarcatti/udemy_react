import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'
import {add, remove} from '../../store/index'

const CartItem = (props) => {
  const { name, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const value = e.target.value
    if (value == '+') {
      dispatch(add({ name: name, price: price, id}))
    } else {
      dispatch(remove(id))
    }
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick} value="-" >-</button>
          <button onClick={handleClick} value="+" >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
