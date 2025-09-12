'use client';
import { useForm } from "react-hook-form";
import React from 'react'
import remote from "@servces/Singletons/axiosSetup";
export default function RegisterForm() {
   const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
    try {
        remote.post('api/public/user/register',data);
    } catch(e){

    } finally {
        
    }

   };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
                <label>Email address <span className="required"> * {errors.email && <em>{errors.email.message}</em>}</span>  </label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                    })}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group mb-3">
                <label>User Name <span className="required"> * {errors.name && <em>{errors.name.message}</em>}</span>   </label>
                <input
                    {...register("name", { required: "User name is required" })}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Username"
                />
            </div>
            <div className="form-group mb-3">
                <label>Password <span className="required"> * {errors.password && <em>{errors.password.message}</em>}</span>  </label>
                <input
                    {...register("password", { required: "Password is required" })}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                />
            </div>
            <div className="form-group mb-3">
                <label>Confirm Password <span className="required"> * {errors.confirm_password && <em>{errors.confirm_password.message}</em>}</span>  </label>
                <input
                    {...register("confirm_password", { required: "Confirm Password is required" })}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                />
            </div>
            <div className='text-end'>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
            <hr></hr>
            <div className="form-check mb-3">
                <p> Don't have account ? Create Account</p>
            </div>
        </form>
    )
}
