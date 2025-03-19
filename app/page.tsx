import List from "@/components/resturant/List";
import Meals from "@/components/resturant/Meals";
import { Suspense } from "react";
import Loader from '../../clients/components/features/Loader'

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>

      <div className="max-w-[80%] mx-auto">
        <Meals />
        <List />
      </div>
    </Suspense>

  );
}
