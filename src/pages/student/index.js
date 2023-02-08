// This is where you can see a single student's data
import { Link, useLocation } from "react-router-dom";
import _ from "./student.module.css";

const Student = () => {
  const location = useLocation();

  const data = {
    studentName: location.state.studentName,
    studentStream: location.state.studentStream,
    studentID: location.state.studentID,
  };

  return (
    <>
      <Link to="/students">
        <div className={_.goBack}> {"<"} Go back</div>
      </Link>
      <section className={_.student}>
        <h1>{data.studentName}</h1>
        <h4 style={{ fontFamily: "Light" }}>{data.studentStream}</h4>
        <h4 style={{ fontFamily: "Light" }}>{data.studentID}</h4>
      </section>
    </>
  );
};

export default Student;
