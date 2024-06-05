import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";

const LoginButton = (props) => {
  const { content } = props;
  return (
    <>
      <Button className="w-100 mt-2">{content}</Button>
    </>
  );
};

export default LoginButton;
