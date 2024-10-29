import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.post('http://192.168.68.117:8000/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
      });
      
      setMessage("Registration successful!");
      console.log("Registration response:", response.data);

      reset(); 
    } catch (error) {
      setMessage("Registration failed. " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className="text-lg font-bold">Register Page</h1>
      {message && <p className="text-green-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className='w-80'>
        <div className="mb-4">
          <label>Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            className='border-2 border-gray-400 rounded-lg w-full p-2'
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

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

        <div className="mb-4">
          <label>Confirm Password:</label>
          <input
            {...register("confirmPassword", { required: "Confirm Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
            type="password"
            className='border-2 border-gray-400 rounded-lg w-full p-2'
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <div className="mb-4">
          <label>Phone:</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            className='border-2 border-gray-400 rounded-lg w-full p-2'
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <Button type="submit" variant='contained' className="w-full mt-4">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
