import { Outlet } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";

const Layout = () => {

    return (
        <div>
            <section>
                {/* <SideBar/>  */}
                <section className='content-section' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </section>
            </section>
        </div>
    )
}

export default Layout