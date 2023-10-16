import Image from "next/image"
import errorImg from '../assets/errorImg.png'
const NotFoundPage = () => {
  return (
    <div>
      <Image src={errorImg} alt="Error" height={1000} width={1000} className="w-screen h-screen"/>
    </div>
  )
}
export default NotFoundPage