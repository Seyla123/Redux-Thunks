import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { signUp } from "../store/thunks/signUp";

function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" , passwordConfirm: ""});
  const dispatch = useDispatch();
  const { isLoading, error, signUpSuccess } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form :', formData);
    
    dispatch(signUp(formData));
  };
  return (
    <div>
        <h3>SignUp</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" onChange={handleChange} className='bg-gray-500 m-2 rounded-md p-2' value={formData.name} id="name" name="name" placeholder="Enter Email"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" onChange={handleChange} className='bg-gray-500 m-2 rounded-md p-2' value={formData.email} id="email" name="email" placeholder="Enter Email"/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={handleChange} className='bg-gray-500 m-2 rounded-md p-2' id="password" value={formData.password} name="password" type="text" placeholder="Enter Password"/>
            </div>
            <div>
                <label>Confirem Password</label>
                <input onChange={handleChange} className='bg-gray-500 m-2 rounded-md p-2' id="passwordConfirm" value={formData.passwordConfirm} name="passwordConfirm" type="text" placeholder="Enter Confirm Password"/>
            </div>
            <div>
                <button type="submit" className='bg-blue-500 m-2 rounded-md p-2'>create account</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp