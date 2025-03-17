import CustomPagination from "@/components/shared/custom-pagination";
import Category from "./category";
import CategoryResult from "./category-result";

const BrowsePage = () => {
  return (
    <div className="bg-custom-background w-full py-12">
      <Category />
      <CategoryResult />

      <div className="w-[1100px] mx-auto mt-10 flex justify-end">
        <CustomPagination />
      </div>
    </div>
  );
};

export default BrowsePage;
