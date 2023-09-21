import { Navigate, useRoutes } from "react-router-dom"
import Home from "~/components/Home"
import { PATH } from "~/constants/common"
import Layout from "~/layouts"
import { Login, Profile, Register } from "~/pages"
import RequireAuth from "./require-auth"


const Routes = () => {
    const routes = useRoutes([
        {
            element: <Layout />,
            children: [
                {
                    element: <RequireAuth />,
                    children: [
                        {
                            path: PATH.PROFILE,
                            element: <Profile />
                        }
                    ]
                },
                {
                    path: PATH.HOME,
                    element: <Home />,
                },
            ]
        },
        {
            path: PATH.REGISTER,
            element: <Register />
        },
        {
            path: PATH.LOGIN,
            element: <Login />,
        },
        {
            path: '',
            element: <Navigate to='/login' />,
        },
    ])

    return routes
}

export default Routes