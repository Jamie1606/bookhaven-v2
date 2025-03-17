import URL from "@/constant/url";
import FilterIcon from "@/icons/filter-icon";
import SearchIcon from "@/icons/search-icon";
import NavLink from "./nav-link";
import { Button } from "../ui/button";
import BrowseIcon from "@/icons/browse-icon";
import PopularIcon from "@/icons/popular-icon";
import LatestIcon from "@/icons/latest-icon";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FAF3E0]">
      <header className="flex w-full max-w-[1200px] items-center mx-auto mt-5 justify-between">
        <Link className="flex items-center" to={URL.HOME}>
          <img src="/icon.png" width={80} height={80} alt="BookHaven Logo" />
          <span className="text-3xl text-custom-brand font-bold xl:text-4xl">BookHaven</span>
        </Link>
        <div className="flex items-center gap-x-10">
          <NavLink href={URL.SEARCH} label="Search" icon={SearchIcon} />
          <NavLink href={URL.BROWSE} label="Browse" icon={BrowseIcon} />
          <NavLink href={URL.LATEST} label="Latest" icon={LatestIcon} />
          <NavLink href={URL.POPULAR} label="Popular" icon={PopularIcon} />
          <NavLink href={URL.FILTER} label="Filter" icon={FilterIcon} />
        </div>
        <Button onClick={() => navigate(URL.SIGNIN)}>Sign In</Button>
      </header>
    </div>
  );
}
