import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import './signUp.css';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';


const oAuthStyle={
  'display':'flex',
  'justifyContent':'space-between'
}
const SignUp = () => {
  return (
    <div className='signup-wrapper w-screen h-screen'>
      <section className='logo h-full bg-black col-span-2 flex justify-center items-center text-6xl font-bold text-white'>
        Board.
      </section>
      <section className='details col-span-3 flex flex-col justify-center items-center bg-[#F5F5F5]'>
        <section className='top--section  min-w-[40%]'>
          <h1 className='text-4xl font-bold text-left px-0 my-0'>Sign in</h1>
          <p className='text-left text-base px-0 py-2'>Sign in to your account</p>
          <div className='oauth--wrapper flex pt-4 w-[100%]' style={oAuthStyle} >
            <span className='google flex items-center bg-white px-4 mr-2 rounded-lg cursor-pointer'>
              <FcGoogle className='h-[200%]' />
              <span
                className='px-4 py-2 text-sm'
                onClick={() => {
                  const auth = getAuth();
                  const provider = new GoogleAuthProvider();
                  signInWithPopup(auth, provider);
                }}
              >
                Sign in with google
              </span>
            </span>
            <span className='apple flex items-center bg-white px-4 rounded-lg cursor-pointer'>
              <FaApple className='h-[200%]' />
              <span className='px-4 py-2 text-sm'>Sign in with Apple</span>
            </span>
          </div>
        </section>
        <form
          action=''
          className='login--details min-w-[40%] py-10 mt-8 bg-white rounded-2xl flex flex-col items-center'
        >
          <p htmlFor='mail' className='text-left w-[100%] px-6 py-2'>
            Email address
          </p>
          <input
            type='text'
            id='mail'
            name='mail'
            value='johndoe@gmail.com'
            className='border rounded-lg w-[90%] py-2 px-4'
          />
          <p htmlFor='mail' className='text-left w-[100%] px-6 py-2 pt-4'>
            Password
          </p>
          <input
            type='password'
            id='password'
            name='mail'
            value='Password'
            className='border rounded-lg w-[90%] py-2 px-4'
          />
          <a href='#' className='text-blue-600 text-left self-start px-6 py-4'>
            Forgot Password?
          </a>
          <Link
            to={'/dashboard'}
            className='text-center font-semibold text-white bg-black w-[90%] py-3 rounded-lg'
          >
            Sign in
          </Link>
        </form>
        <p className='text-base py-4'>
          Don't have an account?{' '}
          <a href='#' className='text-blue-600 text-left'>
            Register Here
          </a>
        </p>
      </section>
    </div>
  );
};
export default SignUp;
