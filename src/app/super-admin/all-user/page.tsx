import DashTable from "@/components/ui/DashTable/DashTable"
import { getAllUser } from "@/services/users/get-all-user"
import { userColumns } from "./user.column"

const AllUsers = async() => {
    const allUser = await getAllUser()
    const user = await allUser.filter(single=> single.role === 'user')
  return (
    <div className="px-10 py-5">
        <h2 className="text-xl font-poppins font-bold">All User</h2>
        
        <DashTable columns={userColumns} data={user as any}/>
        
    </div>
  )
}
export default AllUsers