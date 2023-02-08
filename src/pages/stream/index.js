// This is where a user can view a single stream

import { useEffect } from "react";
import Item from "../../components/item";
import {useLocation} from 'react-router-dom';

const Stream = ({ name, streamID }) => {
  const location = useLocation();

  const dummyData = [
    {
      studentName: "John",
      studentId: 1,
    },
    {
      studentName: "Casey",
      studentId: 2,
    },
  ];

  useEffect(() => {
    // TODO: On mount fetch students from stream ID from the database
    const StreamID = location.state.streamID;
    
  }, []);

  return (
    <section>
      <h1>{name}</h1>
      {dummyData.length !== 0 &&
        dummyData.map((student, index) => {
          return (
            <Item
              key={index}
              name={student.studentName}
              id={student.studentId}
            />
          );
        })}
    </section>
  );
};

export default Stream;
