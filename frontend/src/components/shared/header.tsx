import URL from "@/constant/url";
import FilterIcon from "@/icons/filter-icon";
import SearchIcon from "@/icons/search-icon";
import NavLink from "./nav-link";
import { Button } from "../ui/button";
import BrowseIcon from "@/icons/browse-icon";
import PopularIcon from "@/icons/popular-icon";
import LatestIcon from "@/icons/latest-icon";

export default function Header() {
  return (
    <>
      <div className="hidden w-full bg-[#FAF3E0] lg:flex">
        <header className="flex w-full max-w-[1200px] px-4 items-center mx-auto mt-5 justify-between xl:px-0">
          <a className="flex items-center" href={URL.home}>
            <img src="/icon.png" width={80} height={80} alt="BookHaven Logo" />
            <span className="text-3xl text-custom-brand font-bold xl:text-4xl">BookHaven</span>
          </a>
          <div className="flex items-center gap-x-7 xl:gap-x-10">
            <NavLink href={URL.home} label="Search" icon={SearchIcon} />
            <NavLink href={URL.home} label="Browse" icon={BrowseIcon} />
            <NavLink href={URL.home} label="Latest" icon={LatestIcon} />
            <NavLink href={URL.home} label="Popular" icon={PopularIcon} />
            <NavLink href={URL.home} label="Filter" icon={FilterIcon} />
          </div>
          <Button className="">Sign In</Button>
        </header>
      </div>
    </>
  );
}
