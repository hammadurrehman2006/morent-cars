// page.tsx
import Hero from "@/components/major/hero";
import { client } from "@/sanity/lib/client";
import { allCars_Q } from "@/sanity/lib/queries";

export default async function Page() {
  const Cars = await client.fetch(allCars_Q);

  return (
    <>
      <div>
        <Hero Cars={Cars} />
      </div>
    </>
  );
}
