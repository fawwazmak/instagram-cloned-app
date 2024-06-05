import { REACT } from "react";
import "../App.css";
import LoginButton from "../COMPONENTS/LoginButton";

const LoginPage = () => {
  return (
    <>
      <div
        className="mt-5"
        style={{
          margin: "0 auto",
          width: "fit-content",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div className="border-md-up p-4 pb-2">
          <h1 style={{ fontFamily: "Pacifico" }} className="mb-5 mb-md-0">
            Instagram
          </h1>

          <LoginButton
            className="fbkMbl"
            style={{}}
            content={
              <p className="">
                <i className="fa-brands fa-square-facebook fs-5"></i> Continue
                with facebook
              </p>
            }
          />
          <div className="d-flex d-md-none align-items-center gap-2 justify-content-center mt-4">
            <div
              className=""
              style={{
                height: "1px",
                width: "110px",
                backgroundColor: "gray",
              }}
            ></div>
            <p>OR</p>
            <div
              className=""
              style={{
                height: "1px",
                width: "110px",
                backgroundColor: "gray",
              }}
            ></div>
          </div>
          <form
            action=""
            method="post"
            className="m-4"
            style={{ width: "250px" }}
          >
            <input
              type="text"
              name=""
              style={{
                borderColor: "#dbdbdb",
                outline: "none",
                backgroundColor: "#fafafa",
                height: "30px",
              }}
              className="mt-2 px-1 rounded-1 w-100 d-block border py-1"
              id="loginIdentity"
              placeholder="Phone number, username or email"
            />
            <input
              type="password"
              name=""
              style={{
                borderColor: "#dbdbdb",
                outline: "none",
                backgroundColor: "#fafafa",
                height: "30px",
              }}
              className="mt-2 px-1 rounded-1 w-100 d-block border py-1"
              id="loginPassword"
              placeholder="Password"
            />
            <p className="text-primary d-block d-md-none text-end">
              Forget password?
            </p>
            <LoginButton className="" content="Log in" />
          </form>

          <div>
            <div className="d-none d-md-flex align-items-center gap-2 justify-content-center">
              <div
                className=""
                style={{
                  height: "1px",
                  width: "110px",
                  backgroundColor: "gray",
                }}
              ></div>
              <p>OR</p>
              <div
                className=""
                style={{
                  height: "1px",
                  width: "110px",
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
          </div>

          <div
            className="d-none d-md-flex align-items-center gap-2 text-primary fw-bold"
            style={{ width: "fit-content", margin: "0 auto" }}
          >
            <p>
              <i className="fa-brands fa-square-facebook fs-5"></i>
            </p>
            <p>Log in with Facebook</p>
          </div>
          <p className="text-primary text-md d-none d-md-block">
            Forget password?
          </p>
        </div>

        <div className="border-md-up p-md-3 mt-2">
          <p>
            Don't have account?{" "}
            <a href="#" className="fw-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
