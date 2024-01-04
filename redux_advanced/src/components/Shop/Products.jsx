import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', name: 'Product A', description: 'This is the product A', price: 5},
  {id: 'p2', name: 'Product B', description: 'This is the product A', price: 3},
  {id: 'p3', name: 'Product C', description: 'This is the product A', price: 10},
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(el => {
            return <ProductItem
                key={el.id}
                name={el.name}
                price={el.price}
                description={el.description}
                id={el.id}
              />
          })
        }
        
      </ul>
    </section>
  );
};

export default Products;
