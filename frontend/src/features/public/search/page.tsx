import MostPopular from "./most-popular";
import SearchBook from "./search-book";

const SearchPage = () => {
  return (
    <div className="py-12 bg-custom-background w-full">
      <SearchBook />
      <MostPopular />
    </div>
  );
};

export default SearchPage;
