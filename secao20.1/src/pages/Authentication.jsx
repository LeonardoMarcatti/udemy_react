import AuthForm from '../components/AuthForm';
import {json, redirect} from 'react-router-dom'

const sendAuthData = async ({request, params}) => {
   console.log('auth');
   const data = await request.formData();
   const authData = { email: data.get('email'), password: data.get('password')}
   const url = new URL(request.url).searchParams
   const mode = url.get('mode') || 'login'

   if (mode != 'login' && mode != 'signup') {
      throw json({message: 'Unsupported mode error'}, {status: 422})
   }

   const result = await fetch(`http://192.168.1.160:8080/${mode}`, {
      method: 'post',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(authData)
   })

   if (result.status == 422 || result.status == 401) {
      return result
   }

   if (!result.ok) {
      throw json({message: 'Could no authenticate'}, {status: 500})
   }

   const resData = await result.json()
   const token = resData.token
   localStorage.setItem('token', token);

   const expiration = new Date()
   expiration.setHours(expiration.getHours() + 1)
   localStorage.setItem('expiration', expiration.toISOString())


   return redirect('/')
}

const AuthenticationPage = () => {
  return <AuthForm />;
}



export {sendAuthData}
export default AuthenticationPage;