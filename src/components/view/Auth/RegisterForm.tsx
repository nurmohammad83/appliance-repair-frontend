'use client'

import { Button} from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import Link from 'next/link';

const LoginForm = () => {
const router = useRouter()

const onSubmit =async (values: any) => {
  console.log(values)

};
  return (
    <div>
        <div className='flex font-poppins justify-center mt-24 items-center flex-col'>
        <div className='text-center py-5 sm:py-10'>
            <span className='text-primary font-bold'>PROTECHFIXER</span>
            <h2 className='text-xl font-roboto'>Create Your Account</h2>
        </div>
    <div className='w-96'>
      <div>
        <Form submitHandler={onSubmit}>
         <div>
         <FormInput name='fullName' type='text' placeholder='Enter your email' size='large' label='Full Name' />
         </div>
         <div>
         <FormInput name='email' type='email' placeholder='Enter your email' size='large' label='Email Address' />
         </div>
         <div className='my-5'>
         <FormInput name='password' type='password' placeholder='Enter your password' size='large' label=' Password' />
         </div>
         <div className='my-5'>
         <FormInput name='contactNo' type='text' placeholder='Enter your password' size='large' label='Contact No.' />
         </div>
         <Button block type='primary' size='large' className='bg-primary font-bold' htmlType='submit'>
          Login
         </Button>
        </Form>
      </div>
    </div>
    <span className='pt-3 text-primary'><span className='text-sm font-roboto text-black'>Already a member?</span> <Link href="/login">Login here</Link></span>
  </div>
    </div>
  )
}
export default LoginForm