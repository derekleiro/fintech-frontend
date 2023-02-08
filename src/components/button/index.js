import _ from "./button.module.css";

const Button = ({ name, onClick = null, color, submit = false }) => {
  return (
    <button
      className={_.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
      title={name}
      type={submit ? "submit" : "button"}
    >
      {name}
    </button>
  );
};

export default Button;
