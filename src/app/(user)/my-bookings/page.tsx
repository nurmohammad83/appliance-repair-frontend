import DashTable from "@/components/ui/DashTable/DashTable"
import { columns } from "./booking.column"
import { getAllBookings } from "@/services/booking/get-all-booking"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/AuthOptions"

const MyBookings =async () => {
 const bookings = await getAllBookings()
 const session = await getServerSession(authOptions)
 const filterBook = bookings.filter((book:any)=>book.user.email === session?.email)
  return (
    <div className="px-5">
      <h3 className="py-5 font-roboto">My Booking</h3>
      <DashTable columns={columns} session={session} data={filterBook}/>
    </div>
  )
}
export default MyBookings