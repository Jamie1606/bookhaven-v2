import URL from "@/constant/url";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#D5B895] via-[#D5B895]/70 to-[#D5B895]/40">
      {/* Text Content */}
      <h1 className="text-5xl font-bold mt-6 text-custom-text">404 - Page Not Found</h1>
      <p className="text-lg text-custom-text mt-8">Looks like you&apos;re lost in the library... 📚</p>
      <p className="text-lg text-custom-text mt-3">This page doesn&apos;t exist, but you can find your next great read below.</p>

      {/* CTA Button */}
      <Link to={URL.HOME} className="mt-8 px-6 py-3 bg-custom-button-alternative text-white font-semibold text-lg rounded-lg shadow-md">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
