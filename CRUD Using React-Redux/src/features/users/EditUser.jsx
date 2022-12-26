import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import TextField from '../../components/TextField';
import { editUser } from './userSlice';

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users)
    const existingUser = users.filter(user => user.id === params.id)
    const { name, email } = existingUser[0]
    const navigate = useNavigate();

  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(editUser({
        id: params.id,
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser