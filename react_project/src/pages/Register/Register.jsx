import { useEffect, useState,} from "react"
import "./Register.css"
import { UseRequests } from "../../hook/UseRequests"
import { UseRandomId } from "../../hook/UseRandomId"
import male from "../../images/172626_user_male_icon.png"
import  female from "../../images/172622_user_female_icon.png"

const Register = ({usersData, setUsersData}) => {
    
    const {get, post} = UseRequests()
    const [gen, setGen] = useState()


console.log(UseRandomId())

    useEffect(() => {
        (
            async ()=>{
                const res = await get("http://localhost:4000/users")
                setUsersData(res)
            }  
        )()
    },[])


const hendler = (gen) => {
    if(gen){
        setGen(male)
    }else{
        setGen(female)
    }
}
   

    const hendlerSubmit = async(e) => {
        e.preventDefault()
            
        const {
            lastName:{value:lastName},
            firstName:{value:firstName},
            age:{value:age},
            password:{value:password}
        
        } = e.target;

        let nevUser = {
            image: gen,
            id:UseRandomId(),
            lastName,
            firstName,
            age,
            password,
            friends:[]
        }
        
           
                 const result = await post("http://localhost:4000/users",nevUser)
            
        
       

        setUsersData([...usersData, nevUser])
        } 
    



    return(
        <div className="div-register">
                <form className="Form-register" onSubmit={hendlerSubmit}>
                    <div >
                      <p>lastName</p>  <input type="text" className="input-form-login"  name="lastName"/>
                    </div>
                    <div>
                      <p>firstName</p>  <input className="input-form-login" type="text" name="firstName"/>
                    </div>
                    <div>
                      <p>password</p>  <input className="input-form-login" type="password" name="password"/>
                    </div>
                    <div>
                     <p>age</p>  <input className="input-form-login" type="number" name="age"/>
                    </div>
                    <div className="Form-buton">
                    <p>male</p>
                    <input type="radio" name="gender" onChange={() => hendler(true)}/>
                    <p>female</p>
                    <input type="radio" name="gender" onChange={() => hendler(false)}/>
                    </div>

                    <button className="button-form">add user</button>
                </form>

            </div>
    )
}


export default Register