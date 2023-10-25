import { useContext } from 'react';
import login from '../../assets/assets/images/login/login.svg'
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const registerHandler = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value 
    
    createUser(email,password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
  }

    return (
        <div>
            <div className="hero min-h-screen">
  <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
  <div className=" w-full border bg-base-100 rounded-xl">
    
      <form onSubmit={registerHandler} className="card-body p-10">
        <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary text-white bg-[#FF3811] border-none">Sign Up</button>
        </div>
       <div className='text-center'>
        <p className='text-lg font-medium my-3'>Or Sign In with</p>
        <div className='flex justify-center gap-2'>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><BiLogoFacebook className='text-2xl text-blue-800'></BiLogoFacebook></button>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><FaLinkedinIn className='text-2xl text-blue-600'></FaLinkedinIn></button>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><FcGoogle className='text-2xl'></FcGoogle></button>
        </div>
        <p className='my-8'>Already Have an account? <Link to="/login" className='font-semibold text-[#FF3811]'>Sign In</Link></p>
       </div>
      </form>
    </div>
    <div className="text-center w-full lg:text-left">
      <img src={login} alt="" />
    </div>

  </div>
</div>
        </div>
    );
};

export default Register;