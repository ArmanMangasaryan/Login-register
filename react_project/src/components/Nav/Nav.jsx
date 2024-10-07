import { NavLink, Outlet } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <div className="parent_Nav">
                <div className="Nav">
                    <NavLink to="/">Login</NavLink>
                    <NavLink to="/Register">register</NavLink>
                </div>
            </div>   
                <Outlet/>

        </div>

        

        
    )
}

export default Nav