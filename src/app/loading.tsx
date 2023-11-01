import { Spin } from "antd"
import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen"><Image src="/loading.gif" width={100} height={100} alt="loading"/></div>
  )
}
export default Loading