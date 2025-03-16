import { URLLink } from "@/constant/url";
import { IconProps } from "@/icons/definition";
import clsx from "clsx";
import { Link } from "react-router";

interface NavLinkProps {
  href: URLLink;
  label: string;
  icon?: React.ElementType<IconProps>;
  className?: string;
}

export default function NavLink({ href, className, icon: Icon, label }: NavLinkProps) {
  return (
    <Link className={clsx(className, "text-lg text-custom-text flex items-center")} to={href}>
      {Icon && <Icon width={20} height={20} className="mr-1" />}
      {label}
    </Link>
  );
}
