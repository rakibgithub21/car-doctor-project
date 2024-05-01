import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className="hero mt-10 min-h-[60vh]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={img} className='w-full' alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-medium text-rose-400">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                          <input className='btn btn-primary' type="submit" value="Sign In" />
                        </div>
                    </form>
                    <p  className='text-center my-4'>New To Car Doctor <Link to={'/sign-up'} className='text-orange-400 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;