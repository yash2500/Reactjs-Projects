import React, { useState } from "react";

import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

const AddUser = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(addUser({
        id: uuidv4(),
        name: values.name, 
        email: values.email,
    }))
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        label="Email"
        inputProps={{ type: "email", placeholder: "johndoe@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
