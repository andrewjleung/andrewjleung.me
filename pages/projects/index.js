import Container from "../../components/Container";
import ProjectItem from "../../components/ProjectItem";

export default function Blog() {
  return (
    <Container>
      <h1 className="pl-6">Projects</h1>
      <div className="flex flex-col gap-3">
        <ProjectItem
          imageSrc="/fantano.jpg"
          imageAlt="Anthony Fantano"
          href="https://github.com/andrewjleung/fantano-reviews"
          title="TND Reviews"
          description="Generating/live-updating a dataset containing all of Anthony
            Fantano's scored music reviews using the YouTube Data API."
        />
        <ProjectItem
          imageSrc="/raudi.png"
          imageAlt="Raudi"
          href="https://raudi.up.railway.app/"
          title="Raudi"
          description="Get random sounds for instant inspiration, made for audio creatives prone to overthinking. Built off of the Freesound API."
        ></ProjectItem>
      </div>
    </Container>
  );
}
