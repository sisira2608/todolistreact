import React from 'react';

function Todolist(props) {
  const handleDelete = () => {
    console.log("Delete button clicked"); // Check if this logs when clicked
    props.deleteItem(props.index); // Trigger the deletion event
  };

  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={handleDelete}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;

