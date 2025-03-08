import { URLLink } from "@/constant/url";
import { IconProps } from "@/icons/definition";
import clsx from "clsx";

interface NavLinkProps {
  href: URLLink;
  label: string;
  icon?: React.ElementType<IconProps>;
  className?: string;
}

export default function NavLink({ href, className, icon: Icon, label }: NavLinkProps) {
  return (
    <a className={clsx(className, "text-lg text-custom-text flex items-center")} href={href}>
      {Icon && <Icon width={20} height={20} className="mr-1" />}
      {label}
    </a>
  );
}
