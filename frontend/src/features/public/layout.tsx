import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div className="flex flex-col w-full bg-custom-background justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
