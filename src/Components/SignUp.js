import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { signUp } from "../store/thunks/signUp";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { isCreatingUser, creatingUserError, signUpSuccess } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData))
      .unwrap()
      .then(() => {
        console.log("Sign up successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("Sign up error", error);
      });
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
            {isCreatingUser ? (
              "Creating User..."
            ) : (
              <button type="submit" className="bg-blue-500 m-2 rounded-md p-2">
                Create Account
              </button>
            )}
            {creatingUserError && (
              <div className="text-red-500">{creatingUserError.message}</div>
            )}
            </div>
        </form>
    </div>
  )
}

export default SignUp