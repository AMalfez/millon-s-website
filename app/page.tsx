import Events from "@/components/Events/Events";
import FilterForm from "@/components/FilterForm/FilterForm";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FilterForm/>
      <Events/>
    </div>
  );
}
