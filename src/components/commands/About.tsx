import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Kaileshwar</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>A Backend Developer | Machine Learning Engineer</HighlightAlt> based in India,
        Chennai.
      </p>
      <p>
        I’m like Luffy, but instead of sailing the Grand Line, I’m cruising through the world of code <br />
      searching not for the One Piece, but for the cleanest syntax and the fastest algorithms.</p>
    </AboutWrapper>
  );
};

export default About;
