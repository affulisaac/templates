import React from "react";
import LoginForm from "./LoginForm";

const Page = async () => {
  return (
    <div
      className="card border-0 rounded-4 p-5 px-3 px-md-4 social-auth-card mx-auto"
      style={{ maxWidth: "450px" }}
    >
      <div className="text-center" style={{ maxWidth: "400px" }}>
        <img
          src="https://designs.hubtel.com/v4//assets/images/social-groups/logo-black.svg"
          width="70"
          className="mb-4"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
