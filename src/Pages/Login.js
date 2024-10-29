import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';


const Login = () => {
  
  const { register, formState: { errors } } = useForm();


 
  return (
    <div className='flex flex-col items-center p-4'>
         <h1 className="text-lg font-bold">Login Page</h1>
         <form  className='w-80'>
         <div className="mb-4">
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email"
              }
            })}
            className='border-2 border-gray-400 rounded-lg w-full p-2'
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
            type="password"
            className='border-2 border-gray-400 rounded-lg w-full p-2'
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <Button type="submit" variant='contained' className="w-full mt-4">
          Login
        </Button>

         </form>
 

      </div>
  )
}

export default Login