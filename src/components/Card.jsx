import Button from "./Button";
import styles from "./Card.module.css";

const Card = ({ title, desc, stack, demoBtn, viewBtn }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.projectDesc}>{desc}</div>

        <div className={styles.stackContainer}>
          {stack.map((option, index) => (
            <div className={styles.stackItem} key={index}>
              <img src={option.symbol} alt="icon"></img>
              <div>{option.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.buttonsContainer}>
          <Button text={"Live demo"} onClick={demoBtn} style={"btn btn-3"} />
          <Button text={"View code"} onClick={viewBtn} style={"btn-4"} />
        </div>
      </div>
    </>
  );
};

export default Card;
