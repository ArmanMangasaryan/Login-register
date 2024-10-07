import { useEffect, useState } from "react"
import "./Login.css"
import { UseRequests } from "../../hook/UseRequests"
import { Navigate, useNavigate } from "react-router-dom"

const Login = ({usersData, setCurrentUsers}) => {

  const {get, puth} = UseRequests()
  
  const [users, setUsers] = useState([])
  const navigate = useNavigate();




  useEffect(() =>{
    (
        async()=> {
            const res = await get("http://localhost:4000/users")
            setUsers(res)
        }
    )()
},[])


   const hendlerSubmitForm = async(e) => {
    e.preventDefault()

    const {
        login:{value:login},
        password:{value:password}
    } = e.target

    const isAoutUser = usersData.find((user) => (user.firstName === login || user.email === login) && user.password === password);

    if(isAoutUser){
       const result = puth("http://localhost:4000/cuurentUser",isAoutUser)
       setCurrentUsers(isAoutUser)
    //    navigate("/")
      
    }



   }

    return(
        <div className="Login-background">
            <div className="container div-form">
                <form action="" className="form-login" onSubmit={hendlerSubmitForm}>
                    <p>Login</p>
                    <input name="login" type="text" className="input-form-login"/>
                    <p>Password</p>
                    <input name="password" type="password" className="input-form-password"/>
                    <div className="div-button-form">
                        <button className="button-form">next</button>
                    </div>
                
                    
                </form>
            </div>
        </div>
    )
}

export default Login