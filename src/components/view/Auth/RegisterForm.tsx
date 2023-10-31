"use client";

import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import { createUser } from "@/services/users/createUser";
import { loginUser } from "@/helpers/logInUser";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "@/schemas/userCreateSchema";
import logo from "@/assets/pro_logo.png";
import Image from "next/image";

const RegisterForm = () => {
  const [submitError, setSubmitError] = useState();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await createUser({
        ...values,
        isPasswordReset: false,
      });
      if (response) {
        const logInRes = await loginUser({
          email: response?.email,
          password: values?.password,
        });
        if (logInRes && !logInRes.ok) {
          // @ts-ignore
          setSubmitError(logInRes?.error || "");
        } else {
          router.push("/");
          message.success("User Create in successfully");
        }
      }
    } catch (error) {
      message.warning("Please try again");
    }
  };
  return (
    <div className="flex sm:min-h-screen font-poppins justify-center my-8 items-center">
      <div className="w-96 shadow-sm shadow-black/25 rounded-md p-8">
        <div className="text-center pb-5 sm:pb-10">
          <div className="flex justify-center items-center">
            <Image width={100} height={50} src={logo} alt="logo" />
          </div>
          <h2 className="text-xl font-roboto">Create Your Account</h2>
        </div>
        <div>
          <div>
            <Form
              submitHandler={onSubmit}
              resolver={yupResolver(createUserSchema)}
            >
              <div>
                <FormInput
                  name="fullName"
                  type="text"
                  placeholder="Enter your email"
                  size="large"
                  label="Full Name"
                />
              </div>
              <div className="my-4">
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  size="large"
                  label="Email Address"
                />
              </div>
              <div className="my-4">
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  size="large"
                  label=" Password"
                />
              </div>
              <div className="my-4">
                <FormInput
                  name="contactNo"
                  type="text"
                  placeholder="Enter your password"
                  size="large"
                  label="Contact No."
                />
              </div>
              <Button
                block
                type="primary"
                size="large"
                className="bg-primary font-bold"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form>
            <p className="text-red-500 text-sm">{submitError}</p>
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm font-roboto text-black">
            Already a member?
          </span>
          <span>
            <Link className="text-primary text-sm" href="/login">
              Login here
            </Link>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
