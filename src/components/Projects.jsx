import Card from "./Card";
import CssIcon from "../assets/icons/Css.svg";
import HtmlIcon from "../assets/icons/Html.svg";
import JSIcon from "../assets/icons/Javascript.svg";
import WebpackIcon from "../assets/icons/Webpack.svg";
import ReactIcon from "../assets/icons/React.svg";

const Projects = () => {
  const projectList = [
    {
      key: 1,
      title: "Calculator",
      desc: "This app is a basic calculator which does basic calculations, built with vanilla JS, CSS, and HTML",
      stack: [
        { name: "JavaScript", symbol: JSIcon },
        { name: "HTML", symbol: HtmlIcon },
        { name: "CSS", symbol: CssIcon },
      ],
      demoLink: "errorPage",
      codeLink: "errorPage",
    },
  ];
  return (
    <>
      <div className="project-section">
        <div className="section container">
          <div className="projects-heading">Projects</div>
          {projectList.map((project) => (
            <Card
              key={project.key}
              title={project.title}
              desc={project.desc}
              stack={project.stack}
              demoBtn={project.demoLink}
              viewBtn={project.codeLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
