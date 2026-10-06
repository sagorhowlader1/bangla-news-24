"use client";

import { Bounce, toast } from "react-toastify";
import { authClient } from "../../lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("SignUp Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      redirect("/");
    }

    if (error) {
      toast.error("Email already Used!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // console.log(error)
    }
  };

  const handleGoogleSingUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSingUp = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md p-4">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn text-white bg-red-600  mt-4 font-semibold"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

      <div className=" flex flex-col ">
        <button onClick={handleGoogleSingUp} className="btn  mb-2">
         <FaGoogle /> SingUp With Google
        </button>
        <button onClick={handleGitHubSingUp} className="btn px-15">
         <FaGithub /> SingUp With GitHub
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
