import login from '../../assets/assets/images/login/login.svg'
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
  <div className=" w-full border bg-base-100 rounded-xl">
    
      <form className="card-body p-10">
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input type="email" placeholder="Your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Confirm Password</span>
          </label>
          <input type="password" placeholder="Your password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white bg-[#FF3811] border-none">Login</button>
        </div>
       <div className='text-center'>
        <p className='text-lg font-medium my-3'>Or Sign In with</p>
        <div className='flex justify-center gap-2'>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><BiLogoFacebook className='text-2xl text-blue-800'></BiLogoFacebook></button>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><FaLinkedinIn className='text-2xl text-blue-600'></FaLinkedinIn></button>
            <button className=' btn rounded-full btn-outline border-none bg-gray-100'><FcGoogle className='text-2xl'></FcGoogle></button>
        </div>
        <p className='my-8'>Have an account? <Link to="/register" className='font-semibold text-[#FF3811]'>Sign In</Link></p>
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

export default Login;