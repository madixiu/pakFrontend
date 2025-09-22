import Image from "next/image";
import Banner from "./Components/Home/Banner";
import Category from "./Components/Home/Category";
import About from "./Components/Home/About";
import History from "./Components/Home/History";
import New from "./Components/Home/New";
import Products from "./Components/Home/Products";
import Prizes from "./Components/Home/Prizes";
import HomeNews from "./Components/Home/News";
import { apiUrl } from "@/lib/api";



async function getData() {
  try {
    const response = await fetch(apiUrl("/api/home/"), {
      cache: "no-store",
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch home data');
    }
    
    return response.json();
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
}
  
export default async function Home() {
  const data = await getData();


  return (
    <div className=" items-center justify-items-center min-h-screen">
      {/* <Topbar /> Render the Topbar */}
      <main className="flex flex-col">
        <div className="relative">
          <Banner />
          <Category />
          {/* <Image
            src="/drop1.png"
            alt="Description of the image"
            width={500}
            height={500}
            className="absolute right-0 top-[45%]"
          />
          <Image
            src="/drop2.png"
            alt="Description of the image"
            width={250}
            height={250}
            className="absolute left-[0] bottom-[440] rotate-[-0deg]"
          /> */}
          <About />
        </div>
        <History />
        <New  />
        <Products data={data.featured_products} />
        <Prizes />
        <HomeNews data={data.latest_news} />
      </main>
    </div>
  );
}
