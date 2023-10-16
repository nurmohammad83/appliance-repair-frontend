'use client'

import { Button} from 'antd';
import loginImage from '../../../assets/loginImg.png'
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';

const LoginForm = () => {
const router = useRouter()

const onSubmit =async (values: any) => {
  console.log(values)
const result = await signIn('pro-tech-fixer',{
  email:values.email,
  password:values.password,
  callbackUrl:'/'
}
)

console.log(result,"result")

if(result?.ok && !result.error){
router.push('/')
}
};
  return (
    <div>
        <div className='flex font-poppins justify-center mt-24 items-center flex-col'>
        <div className='text-center py-5 sm:py-10'>
            <span className='text-primary font-bold'>PROTECHFIXER</span>
            <h2 className='text-xl font-roboto'>Log In Your Account</h2>
        </div>
    <div className='w-96'>
      <div>
        <Form submitHandler={onSubmit}>
         <div>
         <FormInput name='id' type='email' placeholder='Enter your email' size='large' label='Email Address' />
         </div>
         <div className='my-5'>
         <FormInput name='password' type='password' placeholder='Enter your password' size='large' label=' Password' />
         </div>
         <Button block type='primary' size='large' className='bg-primary font-bold' htmlType='submit'>
          Login
         </Button>
        </Form>
      </div>
    </div>
    <span className='pt-3 text-primary'><span className='text-sm font-roboto text-black'>Not a member?</span> Sign Up Here</span>
  </div>
    </div>
  )
}
export default LoginForm