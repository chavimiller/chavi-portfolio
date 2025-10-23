import Card from "./Card";
import { Element } from "react-scroll";

import CssIcon from "../assets/icons/Css.svg";
import HtmlIcon from "../assets/icons/Html.svg";
import JSIcon from "../assets/icons/Javascript.svg";
import WebpackIcon from "../assets/icons/Webpack.svg";
import ReactIcon from "../assets/icons/React.svg";
import { version } from "react";

const Projects = () => {
  const projectList = [
    {
      key: 1,
      title: "Shopping Cart",
      desc: "This dynamic shopping cart application was built using React. It features product listings fetched from a mocked API, allowing users to add and remove items from the cart, and provides real-time updates of the cart's contents and total price. The application also includes routing between a homepage, shop page, and cart page, utilizing React Router for navigation.",
      stack: [
        { name: "React", symbol: ReactIcon },
        { name: "CSS", symbol: CssIcon },
      ],
      demoLink: "https://coffee-website-cart.vercel.app/",
      codeLink: "https://github.com/chavimiller/shopping-cart",
    },
    {
      key: 2,
      title: "Calculator",
      desc: "This app is a basic calculator which does basic calculations, built with vanilla JS, CSS, and HTML",
      stack: [
        { name: "JavaScript", symbol: JSIcon },
        { name: "HTML", symbol: HtmlIcon },
        { name: "CSS", symbol: CssIcon },
      ],
      demoLink: "errorPage",
      codeLink: "https://github.com/chavimiller/calculator-project",
    },

    {
      key: 3,
      title: "Weather App",
      desc: "This dynamic weather application was built using JavaScript, HTML, and CSS. It fetches real-time weather data from an external API, allowing users to search for any city and view current temperature, weather conditions, and other details",
      stack: [
        { name: "JavaScript", symbol: JSIcon },
        { name: "HTML", symbol: HtmlIcon },
        { name: "CSS", symbol: CssIcon },
        { name: "Webpack", symbol: WebpackIcon },
      ],
      demoLink: "errorPage",
      codeLink: "https://github.com/chavimiller/weather-app",
    },
    {
      key: 4,
      title: "To-Do List",
      desc: "This to-do list app was built with JavaScript, HTML, and CSS. It lets users add, edit, and delete tasks, saving everything automatically in Local Storage so the list stays even after closing the browser.",
      stack: [
        { name: "JavaScript", symbol: JSIcon },
        { name: "HTML", symbol: HtmlIcon },
        { name: "CSS", symbol: CssIcon },
        { name: "Webpack", symbol: WebpackIcon },
      ],
      demoLink: "errorPage",
      codeLink: "https://github.com/chavimiller/to-do-list",
    },
  ];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Element name="portfolio">
        <div className="project-section">
          <div className="section container">
            <div className="projects-heading">Projects</div>
            {projectList.map((project, index) => (
              <div key={project.key}>
                <Card
                  key={project.key}
                  title={project.title}
                  desc={project.desc}
                  stack={project.stack}
                  demoBtn={() => openLink(project.demoLink)}
                  viewBtn={() => openLink(project.codeLink)}
                />
                {index !== projectList.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </>
  );
};

export default Projects;
