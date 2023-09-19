import { useRoutes } from "react-router-dom"
import Layout from "../layouts"


const Routes = () => {
    const routes = useRoutes([
        {
            element: <Layout />,
            children: []
        }
    ])

    return routes
}

export default Routes