"use client";

import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/loginSchema";
import { loginUser } from "@/helpers/logInUser";
import Image from "next/image";
import logo from '@/assets/pro_logo.png';


const LoginForm = () => {
  const router = useRouter();
  const onSubmit = async (values: {email:string,password:string}) => {
    try {
      const result =await loginUser({
        email: values.email,
        password: values.password,
      })
      console.log(result)
      if (result?.ok && !result.error) {
        router.refresh();
        router.push("/");
        message.success("User log in successfully");
      }else if(result?.error){
        message.error('Invalid Email & password')
      }
    } catch (error) {
      message.error("Please try again");
    }
  };
  return (
    <div className="min-h-full">
      <div className="flex font-poppins justify-center my-24 items-center flex-col">
        <div className="text-center py-5 sm:py-10">
        <div className="flex justify-center items-center">
        <Image width={100} height={50} src={logo} alt="logo"/>
    </div>
          <h2 className="text-xl font-roboto">Log In Your Account</h2>
        </div>
        <div className="w-96">
          <div className=" mx-5 sm:mx-0 ">
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
