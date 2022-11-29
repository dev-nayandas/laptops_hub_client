import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { user, googleSignIn, createUser, updateUser } =
    useContext(AuthContext);
  console.log(createUser);
  const navigate = useNavigate();
  // useTitle('Sign Up');
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = () => {
    console.log("hello");
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/home");

        console.log(user.email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignUp = (data) => {
    console.log(data.name);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        const userInfo = {
          // displayName : data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser();
          })
          .catch((err) => console.log(err));

        // form.reset()
      })
      .catch((error) => {
        console.error(error);
      });

    //   form.reset()
  };
  // const name = user.displayName;
  // const email = user.email;
  const saveUser = (data) => {
    const user = { data };
    fetch("https://final-project-server-drab.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/home");

          toast.success("successfully account created");
        }
      });
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Please Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name  is required" })}
              placeholder="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose account type</span>
            </label>
            <select
              {...register("accountType", { required: "It  is required" })}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>Buyer</option>
              <option>Seller</option>
            </select>
            {/* {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>} */}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              placeholder="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("password", {
                required: "Password Address is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
              })}
              placeholder="password"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>

          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Sign Up"
          />
          <p>
            Already have an account?{" "}
            <Link className="text-violet-800 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSubmit}
            className="btn btn-primary w-full"
          >
            Sign In With Google
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUp;
