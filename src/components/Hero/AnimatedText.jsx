import ScrollAnimation from "react-animate-on-scroll";

const AnimatedText = ({ children, delay }) => (
  <ScrollAnimation animateIn="fadeInUp" delay={delay}>
    {children}
  </ScrollAnimation>
);

export default AnimatedText;
