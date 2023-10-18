import DashTable from "@/components/ui/DashTable/DashTable"
import { columns } from "./booking.column"

const MyBookings =async () => {
  const res = await fetch("http://localhost:4000/api/v1/bookings",{
    cache:'no-cache'
  });
  const { data } = await res.json();
console.log(data,'Data')
  return (
    <div>
      <DashTable columns={columns} data={data}/>
    </div>
  )
}
export default MyBookings