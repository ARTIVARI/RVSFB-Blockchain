import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validUser } from '../auth';
const Signin=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      if (email === validUser.email && password === validUser.password) {
        navigate('/dashboard'); // Redirect to the admin page
      } else {
        navigate('/*')
        setError('Invalid email or password');
      }
    }
  return (
    <div className='flex flex-col justify-center items-center m-10 gap-10'>
     <h1>Voter Signin Page</h1>
    
     <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>

                        <button onClick={handleLogin} type="submit" className="w-full text-white bg-yellow-600 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        
                    </form>

    </div>
  )
}

export default Signin