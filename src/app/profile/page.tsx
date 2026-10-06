"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [show, setShow] = useState(false)

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
    await authClient.updateUser({
      ...newUserData,
    });
  };


  const handleShowForm = () => {
    setShow(!show)
  }

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-2">
        <Link href="/profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              {user?.image && (
                <Image
                  width={100}
                  height={100}
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image}
                />
              )}
            </div>
          </div>
        </Link>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <button onClick={handleShowForm} className="btn">Edit Profile</button>
      </div>

      {show && 
      <form onSubmit={handleUpdateProfile}>
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
          <button
            type="submit"
            className="btn text-white bg-red-600  mt-4 font-semibold"
          >
            Update Profile
          </button>
        </fieldset>
      </form>
      }
    </div>
  );
};

export default ProfilePage;
