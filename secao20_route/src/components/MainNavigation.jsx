import { NavLink } from "react-router-dom";
import navigationStyles from '../styles/navigation.module.css'

const MainNavigation = () => {
   return (
      <header>
         <nav>
            <ul className={`${navigationStyles.ul}`}>
               <li><NavLink to="" className={({isActive}) => isActive ? `${navigationStyles.active}` : '' } end >Home Page</NavLink></li>
               <li><NavLink to="products" className={({isActive}) => isActive ? `${navigationStyles.active}` : '' }>Products</NavLink></li>
            </ul>
         </nav>
      </header>
   )
}

export default MainNavigation