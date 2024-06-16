import React from 'react';
import logo from '../assets/logo.jpeg';
import TextInput from '../components/TextInput/TextInput';
import PasswordInput from '../components/TextInput/PasswordInput';
import DateOfBirthInput from '../components/TextInput/DateOfBirthInput';
import { Link } from 'react-router-dom';

function Signup() {
  // JavaScript function
  console.log(logo);

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="pt-10 pb-10 border-b border-solid border-gray-200 w-full justify-center flex">
          <img src={logo} width="120" className="rounded-full" alt="Logo" />
        </div>

        <div className="w-1/4 py-6 flex flex-col items-center">
          <div className="font-semibold mb-10 text-2xl">
            Sign up For free to start listening
          </div>
          <TextInput label="Email Id or username" placeholder="Email Id or username" className="my-6" />
          <TextInput label="Confirm Email" placeholder="Confirm Email" className="mb-6" />
          <PasswordInput label="Enter your password" placeholder="Strong password needed for strong people" />
          <TextInput label="Enter your avatar name" placeholder="Great People have Great Name" className="my-6" />
          <DateOfBirthInput />
          <div className="border-b border-solid border-gray-200 w-full items-center flex justify-center mt-10">
            <button className="bg-green-300 text-lg font-semibold p-3 px-10 rounded-full">Sign Up</button>
          </div>
          <div className="w-full border mt-4 border-solid border-gray-200"></div>
          <div className="my-6 text-lg font-bold">
            Already have an account
          </div>
          <div className="border py-4 rounded-full mt-5 border-gray-400 items-center flex w-full justify-center">
            <Link to="/login" className="text-blue-500">Log In!</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
