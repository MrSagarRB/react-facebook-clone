import profilePic from "../public/profile.png";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { VideoCameraIcon } from "@heroicons/react/outline";
import { CameraIcon, EmojiHappyIcon } from "@heroicons/react/solid";
// import { db, storage } from "../firebase";

function InputBox() {
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className="rounded-full"
          src={profilePic}
          width={50}
          height={50}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder="Whats on Your Mind"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div>
      <div>
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          </div>
        </div>

        <div>
          <div
            onClick={() => filepickerRef.current.click()}
            className="inputIcon"
          >
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            <input
              // ref={filepickerRef}
              // onChange={addImageToPost}
              type="file"
              hidden
            ></input>
          </div>
        </div>
        <div>
          <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
