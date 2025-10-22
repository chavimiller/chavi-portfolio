import Button from "./Button";

const Card = ({ title, desc, stack, demoBtn, viewBtn }) => {
  return (
    <>
      <div className="card-container">
        <div className="project-title">{title}</div>
        <div className="project-desc">{desc}</div>

        <div className="stack-container">
          {stack.map((option, index) => (
            <div className="stack-item" key={index}>
              <img
                src={option.symbol}
                alt="icon"
                className="stack-symbol"
              ></img>
              <div className="stack-name">{option.name}</div>
            </div>
          ))}
        </div>

        <div className="buttons-container">
          <Button text={"Live demo"} onClick={demoBtn} style={"btn btn-3"} />
          <Button text={"View code"} onClick={viewBtn} />
        </div>
      </div>
    </>
  );
};

export default Card;
