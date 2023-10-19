import DashTable from "@/components/ui/DashTable/DashTable"
import { columns } from "./booking.column"
import { getAllBookings } from "@/services/booking/get-all-booking"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/AuthOptions"
import { IBooking } from "@/types/common"

const MyBookings =async () => {
 const bookings = await getAllBookings()
 const session = await getServerSession(authOptions)
//@ts-ignore
 const filterBook = bookings.filter((book:IBooking)=>book.user.email === session?.email)
  return (
    <div className="px-5">
      <h3 className="py-5 font-roboto">My Booking</h3>
      <DashTable columns={columns} session={session} data={filterBook as any}/>
    </div>
  )
}
export default MyBookings