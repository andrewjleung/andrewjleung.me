import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import cn from "classnames";

const NavItem = ({ title, href }) => {
  const router = useRouter();
  const isSelected = href === router.asPath;

  return (
    <Link href={href}>
      <a
        className={cn(
          isSelected ? "font-semibold" : "",
          "px-4 py-2 rounded-lg transition ease-out hover:bg-gray-100 duration-200"
        )}
      >
        {title}
      </a>
    </Link>
  );
};

const NavBar = () => (
  <div className="flex flex-row w-full justify-between pt-5 pb-16">
    <div>
      <NavItem title="Home" href="/" />
    </div>
    <div className="">
      <NavItem title="Blog" href="/blog" />
      {/* <NavItem title="Projects" href="/projects" />
      <NavItem title="Music" href="/music" /> */}
    </div>
  </div>
);

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Andrew Leung</title>
        <meta
          property="description"
          content="My personal landing for dev and music projects plus occasional musings."
        />
        <link rel="icon" href="./profile.png" />
        {/* TODO: SEO if so inclined, open graph */}
      </Head>
      <main>
        <NavBar />
        <div className="container mx-auto max-w-xl mb-16 flex flex-col prose">
          {children}
        </div>
      </main>
      {/* <footer className={styles.footer}>🚧 More website coming soon...</footer> */}
    </div>
  );
}
