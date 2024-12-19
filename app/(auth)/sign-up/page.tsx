import React, { JSX } from "react";
import { NextPage } from "next";
import AuthForm from "@/components/AuthForm";

const SignUp: NextPage = (): JSX.Element => {
  return <AuthForm type="sign-up" />;
};
export default SignUp;
