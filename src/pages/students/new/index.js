// This is where a new user can be created

import { useEffect, useState } from "react";
import Button from "../../../components/button";
import TextInput from "../../../components/text-input";
import _ from "./new-student.module.css";

const NewStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [streams, setStreams] = useState([]);
  const [selectedStream, setSelectedStream] = useState("");

  const handleSubmit = () => {
    const data = {
        studentName,
        studentStream: selectedStream
    }

    // TODO: send data to the database
  };

  const handleTextInput = (e) => {
    setStudentName(e.target.value);
  };

  const handleSelection = (e) => {
    setSelectedStream(e.target.value);
  };

  useEffect(() => {
    // TODO: Fetch streams
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <section className={_.formSection} style={{ margin: "15px" }}>
        <label>Enter Student name</label>
        <br />
        <TextInput
          required={true}
          title="Text field to input a new student's name"
          placeholder={"E.g. Andrew"}
          getInput={handleTextInput}
        />
      </section>
      <section className={_.formSection} style={{ margin: "15px" }}>
        <label>Select Stream</label>
        <br />
        <select onChange={handleSelection}>
          {streams.length !== 0 &&
            streams.map((stream, index) => {
              return (
                <option key={index} value={stream.id}>
                  {stream.name}
                </option>
              );
            })}
        </select>
      </section>
      <Button name="submit" color="#332C39" submit={true} />
    </form>
  );
};

export default NewStudent;
