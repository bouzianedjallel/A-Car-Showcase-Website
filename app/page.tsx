import { Hero } from "../components/Hero";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import { SearchBar } from "@/components/SearchBar";

export default async function Home() {

  const allCars =  await fetchCars();
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden ">
      <Hero/>

      <div className="max-width padding-x p-32 mt-8" id="discover">
        
        <div className="flex flex-col items-start">
          <h1 className="text-4xl text-black font-extrabold mb-3">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        
        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">   
             <CustomFilter />
             <CustomFilter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
