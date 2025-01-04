import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";



import Swal from 'sweetalert2'
import { app } from "../../firebase/firebase.config";


const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createuser } = useContext(AuthContext);

    // const navigate = useNavigate();
    // const location = useLocation();


    // const from = location.state?.from?.pathname || "/";

    const showDetails = useLocation();
    const navigate = useNavigate();


    const [user, setUser] = useState(null);
    console.log(user)
    const googleProvider = new GoogleAuthProvider();


    const onSubmit = data => {
        console.log(data);
        createuser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    };



    const handleGoogleSignIn = () => {
        console.log('hello google mama')

        signInWithPopup(app, googleProvider)

            .then(result => {
                const googleUserLogin = result.user;
                setUser(googleUserLogin);
                if (result.user) {
                    Swal("Successfull", 'User Create Successfuly', "success");
                }
                 navigate(showDetails?.state ? showDetails.state : "/")
            })
            .catch(error => {
                setUser(error.message)
            })
    }



    return (

        <>
            <Helmet>
                <title>Hemayetpur Fruits Shop | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />

                                {errors.password?.type === "required"
                                    && (<p className="text-red-700">password is required</p>)}

                                {errors.password?.type === "minLength" && <span className="text-red-700">password is 6 charecter must be</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-700">password is less  than 20 charecter must be</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-700">password is have on uppercase and lower case or special symball must be</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Sign Up' />

                            </div>

                        </form>

                        <div className="flex flex-col-reverse lg:flex-row gap-5 text-sm justify-between">
                            <button className="flex items-center 
                                 bg-sky-600 text-white
                                  hover:bg-sky-500 p-2 rounded-lg h-10"
                                onClick={handleGoogleSignIn}> <span className=" w-10">
                                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                </span>Google Sign In</button>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp
