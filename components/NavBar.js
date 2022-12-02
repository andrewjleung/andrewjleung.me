import NavItem from "./NavItem";
import cn from "classnames";

export default function NavBar() {
  return (
    <div className="flex flex-row w-full justify-between pt-5 pb-16">
      <NavItem title="Home" href="/" />
      <div className="grow" />
      <NavItem title="Projects" href="/projects" />
      <NavItem title="Blog" href="/blog" />
      <div>
        <a
          className={cn(
            "px-4 py-2 rounded-lg transition ease-in-out duration-100 hover:bg-gray-100 cursor-pointer"
          )}
          href="api/resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
