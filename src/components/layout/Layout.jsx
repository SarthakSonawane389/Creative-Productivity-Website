import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Container from "../ui/Container"
function Layout(){
    return(
        <>
            <Navbar/>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
        </>
    )
}
export default Layout;