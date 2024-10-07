import { Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"
import Users from "../components/Users/Users"
import Friend from "../components/Friend/Friend"
import { useEffect, useState } from "react"
import { UseRequests } from "../hook/UseRequests"
import Home from "../pages/Home/Home"

const AppRouting = () => {
    const {get} = UseRequests()
    const [usersData, setUsersData] = useState([])
    const [currentUser, setCurrentUsers] = useState({});

    useEffect(() => {
        (async () => {
          const result = await get("http://localhost:4000/users");
          const result2 = await get("http://localhost:4000/cuurentUser");
          setCurrentUsers(result2);
          setUsersData(result);
        })();
      }, []);


    return(
        <Routes>
            {!currentUser.id ?
            <Route path="/" element={<Layout/>}>
                <Route index element={<Login usersData={usersData} setCurrentUsers={setCurrentUsers}/>}/>
                <Route path="/Register" element={<Register usersData={usersData} setUsersData={setUsersData}/>}/>
            </Route>
            :
            <Route path="/" element={<Layout currentUser={currentUser}/>}>
                <Route index element={<Users setCurrentUsers={setCurrentUsers} currentUser={currentUser}/>}/>
                <Route path="/Friends" element={<Friend/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Route>}

        </Routes>
    )
}

export default AppRouting