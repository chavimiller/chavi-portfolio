const Button = ({ onClick, text, style, btnType = "default" }) => {
  if (btnType === "noBorder")
    return (
      <div onClick={onClick} className={"btn-4"}>
        {text}
      </div>
    );
  return (
    <div onClick={onClick} className={style}>
      {text}
    </div>
  );
};

export default Button;
