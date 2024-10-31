import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { ParticlesComponent } from "./Particles/ParticlesComponent";

export function Main() {
  return (
    <Container>
      <ParticlesComponent />
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
