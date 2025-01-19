import DetailPage from "@/components/major/CarDetailsP"
import { client } from "@/sanity/lib/client"
import { allCars_Q } from "@/sanity/lib/queries"

async function page() {
  const Cars = await client.fetch(allCars_Q)
  return (
    <div>
      <DetailPage allCars={Cars}/>
    </div>
  )
}

export default page
