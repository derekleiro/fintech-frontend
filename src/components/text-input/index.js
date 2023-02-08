// This is where new streams will be captured
import _ from "./text-input.module.css";

const TextInput = ({ placeholder, title, getInput, required }) => {
  return (
    <input
      required={required || true}
      className={_.textInput}
      type={"text"}
      onChange={getInput}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default TextInput;
