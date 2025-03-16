import Category from "./category";
import CategoryResult from "./category-result";
import CustomPagination from "./custom-pagination";

const BrowsePage = () => {
  return (
    <div className="bg-custom-background w-full py-12 flex flex-col">
      <Category />
      <CategoryResult />

      <div className="w-3xl mx-auto mt-10 flex justify-end">
        <CustomPagination />
      </div>
    </div>
  );
};

export default BrowsePage;
