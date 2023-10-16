import RegisterForm from "@/components/view/Auth/RegisterForm"
export const createUser = async (data: any) => {
  const res = await fetch(`http://localhost:4000/api/v1/users/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
}
const UserRegisterPage = () => {
  return (
    <div><RegisterForm /></div>
  )
}
export default UserRegisterPage