import ServiceDetails from "@/components/view/Public/ServiceDetails";

const SingleService = ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
  return (
    <div>
        <ServiceDetails />
    </div>
  )
}
export default SingleService