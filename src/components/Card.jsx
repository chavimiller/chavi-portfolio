import Button from "./Button";

const Card = ({ title, desc, stack, demoBtn, viewBtn }) => {
  return (
    <>
      <div className="card-container">
        <div className="project-title">{title}</div>
        <div className="project-desc">{desc}</div>

        <div className="buttons-container">
          <Button text={"Live demo"} onClick={demoBtn} />
          <Button text={"View code"} onClick={viewBtn} />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Card;

/*

{<div className="stack-container">
        {stack.map((option, index) => (
          <>
            <div className="stack-symbol">{option.symbol}</div>
            <div className="stack-name">{option.name}</div>
          </>
        ))}
      </div>} 
      
*/
