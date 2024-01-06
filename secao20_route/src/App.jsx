import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Root from './pages/Root'
import Error from './pages/Error'
import ProductDetails from './pages/ProductDetails'

const router = createBrowserRouter([
	{path: '/', element: <Root/>, children: [
		{path: '', element: <Home/>},
		{path: 'products', element: <Products/>},
		{path: 'products/:id', element: <ProductDetails/>},
	], errorElement: <Error/>},
])

const  App = () => {
  return <RouterProvider router={router} />
}

export default App;
