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
            "px-4 py-2 rounded-lg transition ease-out hover:shadow-lg duration-200 active:shadow-none"
          )}
        >
          {title}
        </a>
      </Link>
    </div>
  );
}
