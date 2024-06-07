import { REACT } from "react";
import firebase from "../../firebase"
import "../App.css";
import LoginButton from "../COMPONENTS/LoginButton";

const SignUpPage = () => {
  return (
    <>
      <div
        className="mt-5"
        style={{
          margin: "0 auto",
          width: "fit-content",
          textAlign: "center",
          fontSize: "12px",
          color: "#737373",
        }}
      >
        <div className="border-md-up p-4 pb-2">
          <h1 style={{ fontFamily: "Pacifico" }} className="mb-5 mb-md-0">
            Instagram
          </h1>

          <p className="fw-bold">
            Sign up to see photos and videos from your friends.
          </p>
          <LoginButton
            className="fbkMbl"
            style={{}}
            content={
              <p className="fw-bold">
                <i className="fa-brands fa-square-facebook fs-5"></i> Log in
                with facebook
              </p>
            }
          />
          <div className="d-flex align-items-center gap-2 justify-content-center mt-1">
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
            className="m-2 "
            style={{ width: "280px" }}
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
              required
              placeholder="Mobile Number or email"
            />
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
              id="loginPassword"
              required
              placeholder="Full Name"
            />
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
              id="loginPassword"
              required
              placeholder="Username"
            />
            <input
              type="Password"
              name=""
              style={{
                borderColor: "#dbdbdb",
                outline: "none",
                backgroundColor: "#fafafa",
                height: "30px",
              }}
              className="mt-2 px-1 rounded-1 w-100 d-block border py-1"
              id="loginPassword"
              required
              placeholder="Password"
            />
            <p className="mt-3">
              People who use our service may have uploaded your contact
              information to Instagram. <a href="">Learn More</a>
            </p>
            <p>
              By signing up, you agree to our Terms ,{" "}
              <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a> .
            </p>
            <LoginButton className="" content="Sign up" />
          </form>
        </div>

        <div className="border-md-up p-md-3 mt-2">
          <p>
            Have an account?
            <a href="#" className="fw-bold ms-2">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
