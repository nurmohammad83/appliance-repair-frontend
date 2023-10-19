import AdminUserEdit from "@/components/view/Admin/AdminUserEdit"
import { getSingleUser } from "@/services/users/getSingleUser"

interface Props {
  params:{
    id:number
  }
}
const AdminEdit =async (props:Props) => {
  const {id}=props.params

  const data = await getSingleUser(String(id))
  return (
    <div>
      <AdminUserEdit data={data}/>
    </div>
  )
}
export default AdminEdit