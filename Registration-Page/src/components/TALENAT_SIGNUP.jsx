import React, { useState } from "react";
import { Form, Button, FormLabel } from "react-bootstrap";

const TALENAT_SIGNUP = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');

  function savevTALENAT(e) {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      userName.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setError(true)
    } else {
        console.log({ firstName, lastName, userName, email, password });

        let data = { firstName, lastName, userName, email, password };
  
        fetch("http://wren.in:3200/api/sign-up/talent", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((result) => {
          result.json().then((resp) => {
            console.log("resp", resp);
          });
        });
        setTimeout(() => {
            setMsg("Successfully Submitted")
        }, 0);
    }


    setFirstName('')
    setLastName('')
    setUserName('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <div className="mx-auto">
      <p className="d-flex justify-content-center text-success">{msg}</p>
        <h3 className="d-flex justify-content-center">TALENAT SIGNUP</h3>
        <Form className="w-100 p-3 " onSubmit={savevTALENAT}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              className="bg-dark text-light border border-success border-2 rounded-pill"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

        {error && firstName.length <= 0 ? 
            <FormLabel className="text-danger">First Name Can't be empty</FormLabel>
            : ""
          }
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              className="bg-dark text-light border border-success border-2 rounded-pill"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {error && lastName.length <= 0? 
            <FormLabel className="text-danger">Last Name Can't be empty</FormLabel>
            : ""
          }
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="bg-dark text-light border border-success border-2 rounded-pill"
              placeholder="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {error && userName.length <= 0 ? 
            <FormLabel className="text-danger">Username Can't be empty</FormLabel>
            : ""
          }
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className="bg-dark text-light border border-success border-2 rounded-pill"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
             {error && email.length <= 0 ? 
            <FormLabel className="text-danger">Email Can't be empty</FormLabel>
            : ""
          }
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="bg-dark text-light border border-success border-2 rounded-pill"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error && password.length <= 0 ? 
            <FormLabel className="text-danger">Password Can't be empty</FormLabel>
            : ""
          }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree the Terms and Conditions"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            SIGN UP
          </Button>
        </Form>
      </div>
    </>
  );
};

export default TALENAT_SIGNUP;
