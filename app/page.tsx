import Events from "@/components/Events/Events";
import FilterForm from "@/components/FilterForm/FilterForm";
import HeroCarousel from "@/components/Hero/Carousel";

export default function Home() {
  return (
    <div>
      <HeroCarousel/>
      <FilterForm/>
      <Events/>
    </div>
  );
}
