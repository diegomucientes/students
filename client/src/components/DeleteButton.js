import React from "react";
import axios from "axios";
import '../styles/DeleteButton.css';

const DeleteButton = (props) => {
  const { studentId, successCallback } = props;
  const deleteStudent = (e) => {
    axios
      .delete('http://localhost:8000/api/student/' + studentId)
      .then(res => {
        console.log(studentId);
        successCallback();
      })
    //   .catch((err) => err);
  };
  return (
  <button onClick={deleteStudent}>Delete Student</button>
  )

};

export default DeleteButton;