import { Outlet } from 'react-router-dom'
// import TokenService from '~/services/token.service'
import JWTManager from '~/utils/jwt'

const RequireAuth = () => {
  // const user = TokenService.getAuth()
  const user = JWTManager.getToken()
  console.log('Required Auth', user)
  // if (!user?.accessToken) {
  //   return <Navigate to='/login' replace />
  // }

  return <Outlet />
}

export default RequireAuth
