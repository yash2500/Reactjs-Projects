import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  const checkEmail = (e) => {
    setEmail(e.target.value)

    if (regex.test(email) === false) {
      setError('invalid email')
    }else{
      setError('')
      return true
    }
  }

  const submit = () => {
    if (email != '') {
      setMsg(`thank you for ${email}`)
    }
    else{
      setError('Please enter email address')
    }
  }
  return (
    <>
    <div className='border border-2 w-25 p-3 m-auto mt-5'>
    <h3>Email Validation</h3>
    <Form className='w-100 m-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={checkEmail} />
        <p className='text-danger'>{error}</p>
        <Button variant="outline-secondary" onClick={submit}>Secondary</Button>
      </Form.Group>
      <p className='text-success'>{msg}</p>
      </Form>
    </div>

      {/* <div>
        <input type="text" placeholder='Enter Your Email' onChange={checkEmail} />
        <p>{error}</p>
        <br />
        <br />
        <button onClick={submit}>
          Submit
        </button>

        <p>{msg}</p>
      </div> */}
    </>
  );
}

export default App;
