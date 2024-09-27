import React from "react";
import {useRouteError, Link} from 'react-router-dom'
import PageContent from '../components/PageContent'

const Error = () => {
   const routeError = useRouteError()
   let title = 'An error occurred'
   let message = 'Something went wrong'

   if (routeError.status == 500) {
      message = routeError.data.message
   }

   if (routeError.status == 404) {
      title = 'Invalid'
      message = 'Data or page not found'
   }

   return <>
      <PageContent title={title}>
         <p>{message}</p>
         <Link to="..">Return</Link>
      </PageContent>
   </>
}

export default Error