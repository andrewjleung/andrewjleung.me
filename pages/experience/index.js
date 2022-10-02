import Experiences from "../../components/Experience";
import ExperienceItem from "../../components/Experience/ExperienceItem";
import BulletPoint from "../../components/Experience/BulletPoint";
import Container from "../../components/Container";

export default function Experience() {
  return (
    <Container>
      <h1 className="pl-6">Experience</h1>
      <Experiences>
        <ExperienceItem
          name="Poloniex"
          startMonth={1}
          startYear={2021}
          endMonth={8}
          endYear={2021}
          jobTitle="Software Engineer Co-op"
        >
          <BulletPoint>
            Built and maintained internal tools written in PHP, TypeScript,
            Java, and React used to manage accounts, funds, and markets across
            crypto exchange
          </BulletPoint>
          <BulletPoint>
            Orchestrated cross-team (engineering, security, marketing, product)
            effort to migrate web marketing material to a content management
            system, eliminating engineering time spent updating 14-18 instances
            of material per month
          </BulletPoint>
          <BulletPoint>
            Implemented key features of a Node.js permissions authentication
            service, including JWT/JWK-based authentication, open source
            improvements to underlying rules engine, and streamlining of testing
            with Jest
          </BulletPoint>
          <BulletPoint>
            Created API actions and automations integrated with internal and
            external services, enabling support engineers to process hundreds of
            customer tickets per day
          </BulletPoint>
        </ExperienceItem>
        <ExperienceItem
          name="Sandbox @ Northeastern"
          startMonth={9}
          startYear={2020}
          endMonth={5}
          endYear={2021}
          jobTitle="Developer for GraduateNU"
          imageSrc="/sandbox.png"
        >
          <BulletPoint>
            Built new features for course planning application with TypeScript,
            React, Redux, and Ruby on Rails
          </BulletPoint>

          <BulletPoint>
            Adapted to changing graduation requirements by iterating on existing
            models, revising logic for validating course requirements, and
            updating UI to reflect changes
          </BulletPoint>

          <BulletPoint>
            Wrote a script to parse university course documentation into a JSON
            schema using Node.js
          </BulletPoint>

          <BulletPoint>
            Provided technical mentoring to teammates through routine
            pair-programming
          </BulletPoint>
        </ExperienceItem>
        <ExperienceItem
          name="Teikametrics"
          startMonth={1}
          startYear={2020}
          endMonth={8}
          endYear={2020}
          jobTitle="Software Engineer Co-op"
        >
          <BulletPoint>
            Demonstrated technical growth starting with no Scala, TypeScript, or
            web development experience to becoming an active contributor to a
            functional Scala with Cats backend and a TypeScript with React/Redux
            frontend
          </BulletPoint>
          <BulletPoint>
            Surfaced Scala APIs with Slick, one of which has been used to
            persist nearly 4 million unique database entries
          </BulletPoint>
          <BulletPoint>
            Developed and augmented CSV bulk upload features used by internal
            analysts and external users 12 times per day
          </BulletPoint>
          <BulletPoint>
            Built features for the Campaign Creation Wizard, including a new
            user flow and an edit mode for advertising campaigns
          </BulletPoint>
        </ExperienceItem>
      </Experiences>
    </Container>
  );
}
