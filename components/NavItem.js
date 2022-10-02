import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

export default function NavItem({ title, href }) {
  const router = useRouter();
  const isSelected = href === router.asPath;

  return (
    <div>
      <Link href={href}>
        <a
          className={cn(
            isSelected ? "font-semibold" : "",
            "px-4 py-2 rounded-lg transition ease-out duration-100 hover:bg-gray-100"
          )}
        >
          {title}
        </a>
      </Link>
    </div>
  );
}
