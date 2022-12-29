import React from "react";
import { useForm } from "react-hook-form";
import AuthSubmit from "../../../components/AuthSubmit/AuthSubmit";
import { TextInput } from "../../../components/TextInput/TextInput";
import AuthNavigate from "../../../components/AuthNavigate/AuthNavigate";
import { POST_USER } from "../helpers/api/api";
import { baseUrl } from "../../../configs";

import "./index.scss"

function Register() {

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    const request = POST_USER(data)

    request.then(res => console.log(res))

    fetch(`${baseUrl}/user/`, {
      method:"POST",
      body:JSON.stringify()
    })
  }

  return (
    <div className="register_container">
     <form className="register_container_form" onSubmit={handleSubmit(onSubmit)}>
      <h2>REGISTER</h2>
      <div>
        <TextInput 
          type="text"
          placeholder="Username"
          {...register("username", {
            maxLength: {
              value: 10,
              message: "max length 10"
            }
          })}
        />

        <p className="errors">
          {errors.username?.message && errors.username.message}
        </p>
      </div>
      <div>
        <TextInput 
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Incorrect Email",
            minLength: {
              value: 2,
              message: "min length 2"
            }
          })}
        />

        <p className="errors">
          {errors.email?.message && errors.email.message}
        </p>
      </div>
      <div>
        <TextInput 
          type="password"
          placeholder="Password"
          {...register("password" , {
            required: "Incorrect Password",
            minLength: {
              value: 4,
              message: "min length 4"
            }
          })} 
        />

        
        <p className="errors">
          {errors.password?.message && errors.password.message}
        </p>
      </div>

      <p className="success">
        {isValid && "Successfull"}
      </p>    

      <div>
        <AuthSubmit 
          caption={"Register"}
          isValid={isValid}
        />
      </div>

      <AuthNavigate location="registerPage" />
    </form>
    </div>
  )
}

export default Register;