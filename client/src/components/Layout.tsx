import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useLogoutMutation } from "../generated/graphql";
import JWTManager from '../utils/jwt';

const Layout = () => {
    const { isAuthenticated, logoutClient } = useAuthContext();

    const [logoutServer, _] = useLogoutMutation()

    const handleLogout = async () => {
        // doSth
        logoutClient()
        await logoutServer({ variables: { userId: JWTManager.getUserId()?.toString() as string } })
    }

    return (
        <div style={{ background: 'linear-gradient(to right, #430089, #82ffa1)' }}>
            <h1>JWT AUTHENTICATION FULLSTACK</h1>
            <nav style={{ borderBottom: '1px solid', paddingBottom: '1rem' }}>
                <Link to='.'>Home</Link> | <Link to='login'>Login</Link> | <Link to='register'>Register</Link> |  <Link to='profile'>Profile</Link> {isAuthenticated && <> | <Link to='.' onClick={handleLogout}>Logout</Link></>}
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout