'use client'

import PublicHeader from '@/components/view/Header/PublicHeader/PublicHeader';
import { Layout } from 'antd';

const { Content } = Layout;

const Contents = ({children}:{children:React.ReactNode}) => {
  const base = 'admin'
  return (
    <Content className='min-h-screen bg-white'>
      <div style={{padding:"10px"}}>
      {children}
      </div>
      </Content>
  )
}
export default Contents