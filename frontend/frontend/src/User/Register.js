import React,{useState} from 'react'
import { Button,Form,FormGroup,Label,Input } from "reactstrap";
import axios from "axios";
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { GoogleLoginButton } from "react-social-login-buttons";
import "./Register.css"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
   

//customer
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }
  

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
          
        };
        axios.post('http://localhost:8020/user/register', newUser).then(() => {
            alert("Registered successfully!!!");
            window.location.href = "#";
        }).catch((err) => {
            alert(err);
        })
    }

  return (
    <div className="loginpg">
        <Form className="loginForm" id = "loginForm">
        <h1 className="text-center">
            <span className="font-weight-bolf">Register</span>
            
        </h1>
        <h2 className="text-center">
            {/* welcome to */}
            <span className="tittle"> iHerb </span> 
        </h2>
        
        {/* email */}
        <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" required onChange={EmailSetter}/>
        </FormGroup>

        {/* password */}
        <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" required onChange={PasswordSetter}/>
        </FormGroup>
        <Button className ="logbtn" type="submit" onClick={onSubmit}>
            Register 
        </Button>
        <div className="text-center pt-3">
            Or continue with your social meadia 
        </div>
        {/* <FacebookLoginButton className="mt-3 mb-3"/> */}
        {/* <GoogleLoginButton className="mt-3 mb-3"/> */}
        <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot Password</a>
            </div>
        </Form>
    </div>
  )
}

export default Login
