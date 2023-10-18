"use client";

import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/loginSchema";
import { loginUser } from "@/helpers/logInUser";

const LoginForm = () => {
  const router = useRouter();
  const onSubmit = async (values: any) => {
    const result =await loginUser({
      email: values.email,
      password: values.password,
    })

    if (result?.ok && !result.error) {
      router.push("/");
      message.success("User log in successfully");
    }
  };
  return (
    <div className="min-h-full">
      <div className="flex font-poppins justify-center my-24 items-center flex-col">
        <div className="text-center py-5 sm:py-10">
          <span className="text-primary font-bold">PROTECHFIXER</span>
          <h2 className="text-xl font-roboto">Log In Your Account</h2>
        </div>
        <div className="w-96">
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div>
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
          </div>
        </div>
        <div className="pt-3 text-primary">
          <span className="text-sm font-roboto text-black">Not a member?</span>{" "}
          <span>
            <Link className="text-primary text-sm" href="/register">
              Sign Up Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
