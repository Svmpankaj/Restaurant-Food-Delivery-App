import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="">
      {/* BOX */}
      <div className="">
        {/* IMAGE CONTAINER */}
        <div className="relative">
          <Image src="/loginBg.png" alt="" fill />
        </div>
        {/* FORM CONTAINER */}
        <div className="">
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="">
            <Image src="/googleLogo.png" alt="" fill />
            <p>Login with google account</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
