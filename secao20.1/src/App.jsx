import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import EditEvent from './pages/EditEvent'
import Error from './pages/Error'
import EventDetail, {loadDetails, deleteEvent} from './pages/EventDetail'
import Events, {eventsLoader} from './pages/Events'
import Root from './pages/Root'
import { sendData } from './components/EventForm'
import Home from './pages/Home'
import NewEvent from './pages/NewEvent'
import Test from './pages/Test'
import TestDetail from './pages/TestDetail'
import EventsRoot from './pages/EventsRoot'
import Newsletter, {newLetter} from './pages/Newsletter'

/**
 * ! loader carrega dados previamente ao carregamento da página. Só não pode ser usado em compoenetes acima do que o declara.
 * ! errorElement renderiza uma página de erro independentemente de onde o erro está
 */


const router = createBrowserRouter([
  {
    path: '/', element: <Root/>, errorElement: <Error/> , children: [
      {index: true, element: <Home/>},
      {path: 'events', element: <EventsRoot/>, children: [
        {index: true, element: <Events/>, loader: eventsLoader},
        {path: ':id', loader: loadDetails, id: 'eventID', children: [
          {index: true, action: deleteEvent,  element: <EventDetail/>},
          {path: 'editEvent', action: sendData, element: <EditEvent/>},
        ]},
        {path: 'new', action: sendData,  element: <NewEvent/>},
      ]},
      {path: 'test', element: <Test/>},
      {path: 'test/:id', element: <TestDetail/>},
      {path: 'newsletter', action: newLetter, element: <Newsletter />}
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App