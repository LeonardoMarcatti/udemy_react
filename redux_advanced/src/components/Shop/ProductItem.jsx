import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import {add} from '../../store/index'

const ProductItem = (props) => {
  const { name, price, description, id } = props;
  const dispatch = useDispatch();
  const handleAddItem = () => dispatch(add({ name: name, price: price, id: id }))

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem} >Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
