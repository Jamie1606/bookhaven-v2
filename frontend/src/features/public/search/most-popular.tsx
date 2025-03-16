export default function MostPopular() {
  return (
    <div className="flex flex-col w-3xl mx-auto mt-20 bg-custom-background px-4">
      <h3 className="text-custom-text font-semibold text-2xl">Some Popular Books</h3>
      <div className="flex flex-wrap justify-between items-center gap-y-4 w-full mt-4">
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
        <div className="w-40 h-56 bg-black rounded-md"></div>
      </div>
    </div>
  );
}
