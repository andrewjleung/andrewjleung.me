import Image from "next/image";
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
          title="TND Reviews"
          description="Generating/live-updating a dataset containing all of Anthony
            Fantano's scored music reviews using the YouTube Data API."
        />
      </div>
    </Container>
  );
}
