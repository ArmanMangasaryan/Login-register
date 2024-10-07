import { NavLink, Outlet } from "react-router-dom"

const UserNav = () => {
    return(
        <div>
        <div className="parent_Nav">
            <div className="Nav">
                <NavLink to="/">Users</NavLink>
                <NavLink to="/Friends">Friends</NavLink>
                <NavLink to="/Home">Home</NavLink>
            </div>
        </div>   
            <Outlet/>

    </div>
    )
}

export default UserNav 