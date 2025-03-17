import CustomPagination from "@/components/shared/custom-pagination";
import FilterOption from "./filter-option";
import FilterResult from "./filter-result";

const FilterPage = () => {
  return (
    <div className="py-12 bg-custom-background w-full">
      <FilterOption />
      <FilterResult />
      <div className="w-[1100px] mx-auto mt-10 flex justify-end">
        <CustomPagination />
      </div>
    </div>
  );
};

export default FilterPage;
