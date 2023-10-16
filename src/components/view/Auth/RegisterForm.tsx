"use client";

import { Button, message } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import { createUser } from "@/services/users/createUser";
import { loginUser } from "@/helpers/logInUser";
import { useState } from "react";

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
          setSubmitError(logInRes.error || "");
        } else {
          router.push("/");
          message.success("User Create in successfully")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex font-poppins justify-center mt-8 items-center flex-col">
        <div className="text-center py-5 sm:py-10">
          <span className="text-primary font-bold">PROTECHFIXER</span>
          <h2 className="text-xl font-roboto">Create Your Account</h2>
        </div>
        <div className="w-96">
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="fullName"
                  type="text"
                  placeholder="Enter your email"
                  size="large"
                  label="Full Name"
                />
              </div>
              <div className="my-5">
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  size="large"
                  label="Email Address"
                />
              </div>
              <div className="my-5">
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  size="large"
                  label=" Password"
                />
              </div>
              <div className="my-5">
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
                Login
              </Button>
            </Form>
            <p className="text-red-500 text-sm">{submitError}</p>
          </div>
        </div>
        <div className="pt-3 ">
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
