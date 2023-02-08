// This is where all a user can view all the streams

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "../../components/item";
import _ from "./streams.module.css";

const Streams = () => {
  const navigate = useNavigate();

  const dummydata = [
    {
      streamName: "Form 1A",
      studentStream: 1,
      studentNumber: 23,
    },
    { streamName: "Form 1B", studentStream: 2, studentNumber: 18 },
    { streamName: "Form 1C", studentStream: 3, studentNumber: 27 },
  ];

  const handleView = (data) => {
    navigate("/stream", {
      state: { streamID: data.studentStream, streamName: data.streamName },
    });
  };

  useEffect(() => {
    // TODO: On mount fetch stream data from the database
  }, []);

  return (
    <section>
      <Link to="/streams/new">
        <div className={_.streamAdd}>+ Add Stream</div>
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dummydata.length !== 0 &&
          dummydata.map((data, index) => {
            return (
              <Item
                viewClickHandler={() => handleView(data)}
                key={index}
                id={data.studentStream}
                studentNumber={data.studentNumber}
                name={data.streamName}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Streams;
