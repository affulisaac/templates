"use client"

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const queryParams = useSearchParams();
  const callbackUrl = queryParams?.get("callbackUrl");
  return (
    <form>
      <h6 className="p-0 m-0 mb-4">Login Page</h6>
      <div className="mb-3 position-relative">
        <span
          onPointerDown={() =>
            signIn("azure-ad", {
              callbackUrl:
                (callbackUrl as string) ??
                `${window.location.origin}/home`,
            })
          }
          className="btn-dark btn text-white text-white rounded mb-3"
        >
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 19 19"
            >
              <rect className="a-microsoft" width="9" height="9" />
              <rect
                className="b-microsoft"
                width="9"
                height="9"
                transform="translate(0 10)"
              />
              <rect
                className="c-microsoft"
                width="9"
                height="9"
                transform="translate(10)"
              />
              <rect
                className="d-microsoft"
                width="9"
                height="9"
                transform="translate(10 10)"
              />
            </svg>
          </span>{" "}
          Sign in with Microsoft
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
