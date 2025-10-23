const Button = ({ onClick, text, style }) => {
  return (
    <div onClick={onClick} className={style}>
      {text}
    </div>
  );
};

export default Button;
