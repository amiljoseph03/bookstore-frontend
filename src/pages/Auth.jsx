import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import './Auth.css'
import { loginUserAPI, registerUserAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';

  import { ToastContainer, toast } from 'react-toastify';




  import { GoogleLogin } from '@react-oauth/google';




function Auth({ register }) {
  console.log(register);

  //create a state to hold user data
  const [userData, setUserData] = useState({ 'username': '', 'email': '', 'password': '' });

  const navigate = useNavigate()

  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {
      alert("Please fill all the fields");
    }
    else {
      //call register user api
      try {
        const response = await registerUserAPI(userData);
        console.log(response);
        if (response.status === 200) {
          // alert("Registration Successful!");
          alert(response.data.message)
          navigate('/login');
        } else {
          alert("Registration Failed! ");
           alert(response.data.message)
          console.log(response.response.data);

        }
      }
      catch (err) {
        console.log(err);
      }
    }

  }

  const handleLogin=async()=>{

    console.log(userData)
    const {email,password}=userData
    if( !email || !password){
      alert("please fill the form")
    }
    else{
      try{

        // api all 
        const response = await loginUserAPI({email,password})
        console.log(response)

        if(response.status==200){

          if(response.data.existingUser.role =="Admin"){
            navigate("/admin-home")
          }else{
            navigate("/")
          }
          alert(response.data.message)
        }else{
          alert(response.response.data)
           toast('Wow so easy!');
        }
        
      }catch(err){
        console.log(err)

      }
    }
  }

  return (
    <div className="bg">
      <div class="flex flex-row">
        <div class="basis-1/2 p-30 mt-5">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              {register ? (
                <h1 className="text-amber-100 text-3xl mb-5">
                  Register here...
                </h1>
              ) : (
                <h1 className="text-amber-100 text-3xl mb-5">Login here...</h1>
              )}
              {register && (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" className="mb-2">
                      Your FullName
                    </Label>
                  </div>
                  <TextInput
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    className=""
                    id="name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>
              )}
              <div className="my-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <TextInput
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className=""
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                id="password1"
                type="password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            {register ? (
              <Button
                onClick={handleRegister}
                className="text-amber-950 !bg-amber-100"
                type="button"
              >
                SignUp
              </Button>
            ) : (
              <div>
                <Button
                  className="text-amber-950 !bg-amber-100"
                  type="button"
                  onClick={handleLogin}
                >
                  SignIn
                </Button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
                ;
              </div>
            )}
          </form>
        </div>
        <div class="basis-1/2"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Auth
