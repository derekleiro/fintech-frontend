// This is where all a user can view all the streams

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "../../components/item";
import _ from "./students.module.css";

const Students = () => {
  const navigate = useNavigate();
  const dummydata = [
    {
      studentName: "John",
      studentID: 1,
      studentStream: "Form 1B",
    },
    {
      studentName: "Casey",
      studentID: 2,
      studentStream: "Form 1C",
    },
  ];

  const handleViewClick = (data) => {
    navigate("/student", {
      state: {
        studentStream: data.studentStream,
        studentName: data.studentName,
        studentID: data.studentID,
      },
    });
  };

  const handleEditClick = () => {};

  const handleDeleteClick = () => {};

  useEffect(() => {
    // TODO: On mount fetch students data from the database
  }, []);

  return (
    <section>
      <Link to="/students/new">
        <div className={_.studentAdd}>+ Add Student</div>
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dummydata.length !== 0 &&
          dummydata.map((data, index) => {
            return (
              <Item
                enableEdit={true}
                enableDelete={true}
                viewClickHandler={() => handleViewClick(data)}
                editClickHandler={handleEditClick}
                deleteClickHandler={handleDeleteClick}
                key={index}
                streamID={data.studentID}
                name={data.studentName}
                stream={data.studentStream}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Students;
