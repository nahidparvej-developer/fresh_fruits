import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import Swal from 'sweetalert2'





const Login = () => {


    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    
    const from = location.state?.from?.pathname || "/";


    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, { replace: true });
            })

    }

    // handle capctha 

    // const handleValidedCaptcha = (e) => {
    //     const userCaptcha = e.target.value;
    //     if (validateCaptcha(userCaptcha)) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true)
    //     }
    // }



    return (

        <>
            <Helmet>
                <title>Hemayetpur Fruits Shop | Log In</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* Capcha */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name='captcha' placeholder="write a captcha" className="input input-bordered" required />


                            </div> */}
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value='Login' />
                            </div>

                       
                        </form>
                        <p className='-mt-4 p-2 text-center text-blue-700'>     <Link to='/signup'>Create A New Account</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
