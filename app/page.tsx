import Events from "@/components/Events/Events";
import FilterForm from "@/components/FilterForm/FilterForm";
import HeroCarousel from "@/components/Hero/Carousel";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroCarousel/>
      <FilterForm/>
      <Events/>
    </div>
  );
}
