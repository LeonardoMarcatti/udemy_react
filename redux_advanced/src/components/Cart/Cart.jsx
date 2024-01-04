import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem'
import {useSelector} from 'react-redux'

const Cart = () => {
  const cartSlice = useSelector(state => state.cart.items)
  const cartAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Card className={classes.cart}>
      <div className={classes.cart_Header}>
        <h2>Your Shopping Cart</h2>
        <h2 className={classes.totalPrice}>${Number(cartAmount).toFixed(2)}</h2>
      </div>
        
      <ul>
        {
          cartSlice.map(el => <CartItem key={el.id}
            item={{ name: el.name, quantity: el.quantity, totalPrice: el.totalPrice, price: el.price, id: el.id }}
          />)
        }
      </ul>
    </Card>
  );
};

export default Cart;
