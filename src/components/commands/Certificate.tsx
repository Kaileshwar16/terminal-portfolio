import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Deep Learning By Andrew Ng",
    desc: "I learned how to build and train deep neural networks from scratch, apply techniques like backpropagation, regularization, and optimization, and use them in real-world tasks like image recognition, natural language processing, and time-series prediction.",
    url: "",
  },
  {
    id: 2,
    title: "Machine Learning By Andrew Ng",
    desc: "I learned the fundamentals of machine learning, including supervised and unsupervised learning algorithms like linear regression, logistic regression, SVMs, neural networks, k-means, and how to apply them effectively using concepts like bias-variance tradeoff, regularization, and evaluation metrics.",
    url: "",
  },
  {
    id: 3,
    title: "Angela Yu’s Python 100 Days of Code",
    desc: "I learned Python programming from basics to advanced by building real-world projects, covering core concepts like data structures, OOP, web development with Flask, automation, APIs, data science, and even game and app development.",
    url: "",
  },
  {
    id: 4,
    title: "React-Dash",
    desc: "A modern, responsive Sales Dashboard built using React. This dashboard displays key performance metrics, charts, and tables to help businesses monitor and analyze their sales data in real-time.",
    url: "https://dashboard-react-swart-chi.vercel.app/",
   },
];

export default Certificate;
