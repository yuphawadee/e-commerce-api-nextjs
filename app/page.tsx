import AllProduct from "./components/Home/AllProduct";
import BestSeller from "./components/Home/BestSeller";
import Category from "./components/Home/Category";
import FlashSales from "./components/Home/FlashSales";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pt-32">
      <FlashSales />
      <Category />
      <BestSeller />
      <AllProduct />
    </div>
  );
}
