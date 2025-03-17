import URL from "@/constant/url";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BookInfo from "./book-info";

const ProductDetailPage = () => {
  const { productID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(productID);

    if (!productID || isNaN(Number(productID))) {
      alert("Invalid product!");
      navigate(URL.HOME);
    }
  }, []);

  return (
    <div className="py-12 bg-custom-background w-full">
      <BookInfo />
    </div>
  );
};

export default ProductDetailPage;
