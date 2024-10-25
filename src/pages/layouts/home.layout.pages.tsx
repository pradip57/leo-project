import { Outlet } from "react-router-dom"
import CompanyContactHeaderComponent from "../../components/header/company-contact/company-contact.header.components"
import NavbarHeaderComponent from "../../components/header/navbar/navbar.header.components"
import FooterComponent from "../../components/footer/footer.components"

const HomeLayoutPage = () =>{

    return (<>
    <CompanyContactHeaderComponent/>
    <NavbarHeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>)
}


export default HomeLayoutPage