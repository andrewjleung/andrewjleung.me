import Head from "next/head";
import styles from "../styles/Home.module.css";
import cn from "classnames";
import NavBar from "./NavBar";

export default function Container({ children }) {
  return (
    <div className={cn(styles.container, "")}>
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
