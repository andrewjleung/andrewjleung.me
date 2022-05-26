import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const NavItem = ({ title, href }) => (
  <Link href={href}>
    <a className="px-4 py-2 rounded-lg transition ease-out hover:bg-gray-100 duration-200">
      {title}
    </a>
  </Link>
);

const NavBar = () => (
  <div className="flex flex-row w-full justify-between pt-5 pb-16">
    <div>
      <NavItem title="Home" href="/" />
    </div>
    <div className="">
      {/* <NavItem title="Blog" href="/blog" />
      <NavItem title="Projects" href="/projects" />
      <NavItem title="Music" href="/music" /> */}
    </div>
  </div>
);

export default function Home() {
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
        <meta property="og:title" content="Andrew Leung" />
        <meta
          property="og:description"
          content="My personal landing for dev and music projects plus occasional musings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./profile.png" />
        <meta property="og:url" content="https://www.andrewjleung.me" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Andrew Leung" />
        <meta
          name="twitter:description"
          content="My personal landing for dev and music projects plus occasional musings"
        />
        <meta name="twitter:image" content="./profile.png" />
      </Head>
      <main>
        <NavBar />
        <div className="container mx-auto max-w-xl mb-16 flex flex-col items-center">
          <div
            id="introduction"
            className="flex flex-col items-center prose pb-10"
          >
            <Image
              className="rounded-full"
              width="176"
              height="176"
              src="/profile.png"
              alt="Andrew Leung"
            />
            <h1 className="pt-2">Howdy!</h1>
          </div>
          <div id="content" className="pt-1 text-2xl prose">
            <p>
              I&apos;m <strong className="hover:">Andrew Leung</strong>, a
              software engineer focused on delivering intuitive, readable, and
              elegant code to create products that make people&apos;s lives
              easier.
            </p>
            <p>
              I crave opportunities to optimize my surroundings, expand my
              palette, and deepen my understanding of various concepts within
              computer science, music production, audio engineering, and more.
            </p>
            <p>
              Whenever time permits, I like to make tunes under the moniker{" "}
              <a href="https://open.spotify.com/artist/00zDjeTQDVOFlNttOnv9bc?si=2S4GHVSqQKuZ7_z73y0t4A">
                <strong>Jordan Leung</strong>
              </a>
              . Take a listen!
            </p>
          </div>
        </div>
      </main>
      {/* <footer className={styles.footer}>🚧 More website coming soon...</footer> */}
    </div>
  );
}
