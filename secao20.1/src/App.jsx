import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './pages/Error'
import {deleteEvent} from './pages/EventDetail'
import Root from './pages/Root'
import { sendData } from './components/EventForm'
import {sendAuthData} from './pages/Authentication'
import Home from './pages/Home'
import NewEvent from './pages/NewEvent'
import EventsRoot from './pages/EventsRoot'
import {newLetter} from './pages/Newsletter'
import logout from './pages/Logout'
import getAuthToken, {checkAuthLoader} from './util/auth'
import {lazy, Suspense} from 'react'

const Events = lazy(() => import('./pages/Events'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const AuthenticationPage = lazy(() => import('./pages/Authentication'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const EditEvent = lazy(() => import('./pages/EditEvent'))
/**
 * ! loader carrega dados previamente ao carregamento da página. Só não pode ser usado em compoenetes acima do que o declara.
 * ! errorElement renderiza uma página de erro independentemente de onde o erro está
 */

const router = createBrowserRouter([
  {
      path: '/', id: 'root', loader: getAuthToken, element: <Root/>, errorElement: <Error/> , children: [
      {index: true, element: <Home/>},
      {path: 'auth', action: sendAuthData, element: <Suspense fallback={<p>Loading...</p>}><AuthenticationPage/></Suspense>},
      {path: 'logout', action: logout},
      {path: 'events', element: <EventsRoot/>, children: [
         {
            index: true, 
            element: <Suspense fallback={<p>Loading...</p>}><Events/></Suspense>,
            loader: () =>  import('./pages/Events').then(module => module.eventsLoader())
         },
         {
            path: ':id',
            loader: (meta) => import('./pages/EventDetail').then(module => module.loadDetails(meta)),
            id: 'eventID', children: [
               {
                  index: true,
                  action: deleteEvent,
                  element: <Suspense fallback={<p>Loading...</p>}><EventDetail/></Suspense>
               },
               {
                  path: 'editEvent',
                  loader: checkAuthLoader,
                  action: sendData,
                  element: <Suspense fallback={<p>Loading...</p>}><EditEvent/></Suspense>,
               }
            ]
         },
         {path: 'new', loader: checkAuthLoader, action: sendData, element: <NewEvent/>},
      ]},
      {path: 'newsletter', action: newLetter, element: <Suspense fallback={<p>Loading...</p>}><Newsletter /></Suspense>}
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App