import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // useTitle('Login')
    const from = location.state?.from?.pathname || '/'
    
    const {signIn,googleSignIn} = useContext(AuthContext);
    // const {googleSignIn} = useContext{AuthContext}
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSubmit = () =>{
      console.log('hello')
      googleSignIn(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user.email)
        navigate('/home')
      })
      .catch(error =>{
        console.error(error);
        setError(error.message)
      })
    }

    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
        //   form.reset()
          // setError('')
          navigate(from, {replace:true})
        })
        .catch(error =>{
          console.error(error);
          setError(error.message)
        })
    }

    return (
        <div className='h-[800px]  flex justify-center items-center bg-red-100'>
            <div className='w-96 p-7'>
            <h3 className='mb-5 text-primary'>User Credential for test </h3>
            <h3 className='mb-5 text-primary'>Buyer: chalo@gmail.com </h3>
            <h3 className='mb-5 text-primary'>Seller: raj@gmail.com </h3>
            <h3 className='mb-5 text-primary'>Admin: sumon@gmail.com </h3>
            <h3 className='mb-5 text-primary'>Password: 123456 </h3>
                <h2 className='text-4xl text-center'>Please Login</h2>
                
                <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
             </label>
            <input {...register("email", {required:"Email Address is required"})} placeholder="email" type="email" className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Password</span>
             </label>
          
            <input {...register("password", {required:"Password Address is required",
           minLength: { value: 6, message: 'Password must be 6 characters or longer' }  
          })} 
            
            placeholder="password" type="password" className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
            <label className="label">
                <span className="label-text">Forget Password</span>
             </label>
        </div>
      
      <input  className='btn btn-primary w-full' type="submit"  value="login"/>
      <p>New to laptops hub?   <Link className='text-violet-800 font-bold' to="/signup">Create a accout</Link> </p>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSubmit} className='btn btn-primary w-full'>Sign In With Google</button>
    </form>
            </div>
        </div>
    );
};

export default Login;