import { useRoutes } from "react-router-dom"
import Profile from "~/components/Profile"
import { PATH } from "~/constants/common"
import { Login } from "~/pages"
import Layout from "../layouts"
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

            ]
        },
        {
            path: PATH.LOGIN,
            element: <Login />,
        },
    ])

    return routes
}

export default Routes