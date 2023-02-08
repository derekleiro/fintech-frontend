// This is where new streams will be captured
import { useState } from "react";
import Button from "../../../components/button";
import TextInput from "../../../components/text-input";
import _ from "./new-stream.module.css";

const NewStream = () => {
  const [streamName, setStreamName] = useState("");

  const handleSubmit = () => {
    // TODO handle input submit
  };

  const handleTextInput = (e) => {
    setStreamName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className={_.formSection} style={{margin: "15px"}}>
        <label>Enter Stream name</label>
        <br/>
        <TextInput
          required={true}
          title="Text field to input stream name"
          placeholder={"E.g. Form 1A"}
          getInput={handleTextInput}
        />
      </section>
      <Button name="submit" color="#332C39" submit={true} />
    </form>
  );
};

export default NewStream;
