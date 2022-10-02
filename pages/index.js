import Image from "next/image";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div id="introduction" className="flex flex-col items-center ">
        <Image
          className="rounded-full"
          width="176"
          height="176"
          src="/profile.png"
          alt="Andrew Leung"
          priority={true}
          quality={100}
        />
        <h1 className="pt-2">Howdy!</h1>
      </div>
      <div id="content" className="text-xl">
        <p>
          I&apos;m <strong className="hover:">Andrew Leung</strong>, a software
          engineer focused on delivering intuitive, readable, and elegant code
          to create products that make people&apos;s lives easier.
        </p>
        <p>
          I crave opportunities to optimize my surroundings, expand my palette,
          and deepen my understanding of various concepts within computer
          science, music production, audio engineering, and more.
        </p>
        <p>
          Whenever time permits, I like to make tunes under the moniker{" "}
          <a href="https://open.spotify.com/artist/00zDjeTQDVOFlNttOnv9bc?si=2S4GHVSqQKuZ7_z73y0t4A">
            <strong>Jordan Leung</strong>
          </a>
          . Take a listen!
        </p>
      </div>
    </Container>
  );
}
