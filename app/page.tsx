import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero/>

      <div className="max-width padding-x padding-y mt-12" id="discover">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl text-black font-extrabold mb-3">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
      </div>
    </main>
  );
}
