import List from "@/components/resturant/List";
import Meals from "@/components/resturant/Meals";

export default function Home() {
  return (
    <div className="max-w-[80%] mx-auto">
      <Meals />
      <List />
    </div>
  );
}
