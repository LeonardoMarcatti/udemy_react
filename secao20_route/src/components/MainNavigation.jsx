import { NavLink } from "react-router-dom";
import navigationStyles from '../styles/navigation.module.css'
/**
* ! NavLink é especial pois a prop className recebe uma função ao invés de uma string ou variável de classe.
* ! A função que NavLink recebe como className recebe um objeto como parametro.
* ! isActive é uma propriedade padrão específica para links
*/
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