import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex flex-row w-full justify-between pt-5 pb-16">
      <NavItem title="Home" href="/" />
      <div className="grow" />
      <NavItem title="Blog" href="/blog" />
      <NavItem title="Projects" href="/projects" />
    </div>
  );
}
