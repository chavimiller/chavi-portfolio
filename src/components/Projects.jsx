import Card from "./Card";

const Projects = () => {
  const projectList = [
    {
      key: 1,
      title: "Calculator",
      desc: "This app is a basic calculator which does basic calculations, built with vanilla JS, CSS, and HTML",
      stack: ["JavaScript", "HTML", "CSS"],
      demoLink: "errorPage",
      codeLink: "errorPage",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="section project-section">
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
