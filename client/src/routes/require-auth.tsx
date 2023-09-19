import { Navigate, Outlet } from 'react-router-dom'
import TokenService from '~/services/token.service'

const RequireAuth = () => {
  const user = TokenService.getAuth()

  if (!user?.accessToken) {
    return <Navigate to='/login' replace />
  }

  return <Outlet />
}

export default RequireAuth
