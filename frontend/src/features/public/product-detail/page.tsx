import URL from "@/constant/url";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BookInfo from "./book-info";
import BookDetail from "./book-detail";
import RelatedBook from "./related-book";
import BookReview from "./book-review";

const ProductDetailPage = () => {
  const { productID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productID || isNaN(Number(productID))) {
      alert("Invalid product!");
      navigate(URL.HOME);
    }
  }, []);

  return (
    <div className="py-12 bg-custom-background w-full">
      <BookInfo />

      <hr className="mt-12 bg-black/25 h-0.5 max-w-[1100px] mx-auto" />

      <div className="mt-12 flex justify-between w-[1100px] mx-auto">
        <BookDetail />
        <RelatedBook />
      </div>

      <hr className="mt-12 bg-black/25 h-0.5 max-w-[1100px] mx-auto" />

      <BookReview />
    </div>
  );
};

export default ProductDetailPage;
