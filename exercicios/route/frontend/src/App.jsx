import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import NewEventPage from './pages/NewEventPage'
import EventsPage from './pages/EventsPage'
import EventDetailPage from './pages/EventDetailPage'
import EditEventPage from './pages/EditEventPage'
import Root from './pages/Root'
import EventsRoot from './pages/EventsRoot'

const router = createBrowserRouter([
  {path: '/', element: <Root />, children: [
    {path: '', element: <HomePage/>},
    {path: 'events', element: <EventsRoot/>, children: [
      {path: '', element: <EventsPage/> },
      {path: 'event/new', element: <NewEventPage/>},
      {path: 'event/:id/edit', element: <EditEventPage/>},
      {path: 'event/:id', element: <EventDetailPage/>},
    ]}
  ]}
])

const App = () =>  {
  return <RouterProvider router={router} />
}

export default App;
