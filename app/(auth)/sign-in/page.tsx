import React, { JSX } from "react";
import { NextPage } from "next";
import AuthForm from "@/components/AuthForm";

const SignIn: NextPage = (): JSX.Element => {
  return <AuthForm type="sign-in" />;
};
export default SignIn;
