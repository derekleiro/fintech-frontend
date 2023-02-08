import Button from "../button";
import _ from "./item.module.css";

const Item = ({
  name,
  id,
  viewClickHandler,
  editClickHandler = null,
  deleteClickHandler = null,
  enableEdit = false,
  enableDelete = false,
  stream = null,
  studentNumber = null
}) => {
  const styles = {};

  return (
    <div className={_.item}>
      <h1 style={{fontFamily: "Bold"}}>{name}</h1>
      {stream && <h4 style={{fontFamily: "Light"}}>{stream}</h4>}
      {studentNumber && <h4 style={{fontFamily: "Light"}}>{studentNumber} students</h4>}

      <div className={_.itemButtons}>
        <Button name={"View"} color="#609EA2" onClick={viewClickHandler} />
        {enableEdit && (
          <Button name={"Edit"} color="#332C39" onClick={editClickHandler} />
        )}
        {enableDelete && (
          <Button
            name={"Delete"}
            color="#C92C6D"
            onClick={deleteClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
