import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux'
import {toggle} from '../../store/index'
import { useSelector } from 'react-redux';

const CartButton = () => {
  const dispatch = useDispatch()
  const handleToggle = () => dispatch(toggle())
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
