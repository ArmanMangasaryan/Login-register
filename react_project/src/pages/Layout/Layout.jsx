
import Nav from "../../components/Nav/Nav"
import UserNav from "../../components/UserNav/UserNav"


const Layout = ({currentUser}) => {
    return(
        <div>
            <div>
                {currentUser?.id ?
                    <UserNav/>
                    : 
                    <Nav/>
                }
                
            </div>
        </div>
    )
}

export default Layout