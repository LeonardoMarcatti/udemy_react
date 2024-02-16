import { redirect } from "react-router-dom"

const logout = () => {
   localStorage.removeItem('token')
   localStorage.removeItem('expiration')
   return redirect('/')
}

export default logout