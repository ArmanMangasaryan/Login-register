import { useEffect, useState } from "react"

import "./Users.css"
import { UseRequests } from "../../hook/UseRequests"
// import { UseRequests } from "../../hook/UseRequests"

const Users = ({currentUser, setCurrentUsers}) => {

    const [userValue, setUserValue] = useState("")
    const {get, puth, post} = UseRequests()
    const [usersData, setUsersData] = useState([])
    // const [currentUser, setCurrentUser] = useState({})
    const [g, sg] = useState([])


    useEffect(() => {
        (
            async()=>{
                const res = await get("http://localhost:4000/users")
                setUsersData(res)

                // const users = await get("http://localhost:4000/cuurentUser")
                // setCurrentUser(users)
            }  
        )()
    },[])


    const usersfilter = usersData.filter(user => {
        return user.firstName?.toLowerCase().includes(userValue.toLowerCase().trim())
    })
    
    
    const hendlerFrend = (userid) => {

            
              setCurrentUsers({...currentUser, friends:[...currentUser.friends, userid]}) 
 

    }
    
   

    return(
        <div className="background-user">
        <h1 style={{color:"rgb(120, 96, 75 )", textAlign:"center"}}>Users</h1>
        <div className="form-div">
            <form action="" className="form">
                <input type="text" placeholder="Search..." onChange={(e)=> setUserValue(e.target.value)} className="input-form"/>
            </form>
        </div>

        <div className= "Users-header"> 

            {usersfilter.map((user) => {
                return(
                <div className="User-card">
                    <img className="img-user" src={user.image} alt="hh"/>
                    <p>{user.firstName}</p>
                    <p>{user.age} years</p>
                    <p>{user.birthDate}</p>
                    <p>{user.phone}</p>
                    <p className="add-Friend" onClick={()=>hendlerFrend(user)}>add Friend</p>
                </div>
                )
            })}
        </div>
    </div>        
    )
}

export default Users