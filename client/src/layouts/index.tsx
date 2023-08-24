import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            LAYOUT
            <section className="app-section">
                {/* <Header /> */}
                <main>
                    <Outlet />
                </main>
                {/* <Footer /> */}
            </section>
        </div>
    )
}

export default Layout