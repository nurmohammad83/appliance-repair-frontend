import DashTable from "@/components/ui/DashTable/DashTable"
import { getAllBookings } from "@/services/booking/get-all-booking"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/AuthOptions"
import { columns } from "./booked.column"

const AllBookedService =async () => {
 const bookings = await getAllBookings()
 const session = await getServerSession(authOptions)

  return (
    <div className="px-5">
      <h3 className="py-8 font-roboto">All Booking Service</h3>
      <DashTable columns={columns} session={session} data={bookings as any}/>
    </div>
  )
}
export default AllBookedService