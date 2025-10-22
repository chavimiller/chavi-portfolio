import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="container section">
        <div className="intro-container">
          <div className="bio">Hi, my name is</div>
          <h1 className="title">Chavi Weisman-Miller</h1>

          <div className="bio">
            Finance graduate turned Front-End Developer, learning and building
            modern web applications with React
          </div>
          <Button text={"About me"} style={"btn btn-1"} />
        </div>
      </div>
      <div className="section about-section">
        <div className="section container">
          <div className="about-me-title">About Me</div>
          <div className="about-me-text">
            After earning my degree in Finance at the University of Maryland and
            moving to Israel, I expected to build a career in the financial
            world. Instead, I found myself drawn to web programming - the
            creativity, the methodical thinking, and the satisfaction of problem
            solving. Since then, I've been focused on learning web development
            and building real projects starting in React. My background in
            finance gives me a sharp eye for structure and detail, and I'm
            excited to combine that with design and technology.
          </div>
          <Button text={"Portfolio"} style={"btn btn-2"} />
        </div>
      </div>
    </>
  );
};

export default About;
