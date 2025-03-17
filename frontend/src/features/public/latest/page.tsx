import CustomPagination from "@/components/shared/custom-pagination";

const LatestPage = () => {
  return (
    <div className="py-12 bg-custom-background w-full">
      <div className="flex flex-col w-[1100px] mx-auto bg-custom-background px-4">
        <h3 className="text-custom-text font-semibold text-2xl">Latest Arrived Books</h3>
        <div className="flex flex-wrap justify-between items-center gap-y-4 w-full mt-4">
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
          <div className="w-40 h-56 bg-black rounded-md"></div>
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
      <div className="w-[1100px] mx-auto mt-10 flex justify-end">
        <CustomPagination />
      </div>
    </div>
  );
};

export default LatestPage;
