import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
        <div className="container mx-auto m-10 flex flex-col items-center">
          <div className="max-w-xl flex flex-col items-center gap-5">
            <Image
              className="rounded-full"
              width="176"
              height="176"
              src="/profile.png"
              alt="Andrew Leung"
            />
            <div id="content" className="text-center text-2xl prose">
              <h3 className="">Howdy!</h3>
              <p>
                I&apos;m Andrew, a software engineer focused on delivering
                intuitive, readable, and elegant code to create products that
                make people&apos;s lives easier.
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
            {/* <iframe
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/artist/00zDjeTQDVOFlNttOnv9bc?utm_source=generator"
              width="100%"
              height="250"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe> */}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>🚧 More website coming soon...</footer>
    </div>
  );
}
