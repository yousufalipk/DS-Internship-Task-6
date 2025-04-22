import Navbar from "@/components/Navbar/Navbar";

export default function Home() {

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-start items-center bg-blue-50">

      <Navbar />

      <div className="w-[80%] flex flex-col justify-start items-start py-10">
        <h1 className="text-3xl font-bold">
          Home Page
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maxime odit sequi voluptatem possimus, illum mollitia adipisci! Velit amet iure voluptatem illo qui. Aliquid, odit eius suscipit quidem animi, distinctio, dicta consequatur minima labore iusto omnis. Cum vero perferendis minus minima illo consectetur quisquam, neque alias, at cumque assumenda atque?</p>
      </div>
    </div>
  );
}
