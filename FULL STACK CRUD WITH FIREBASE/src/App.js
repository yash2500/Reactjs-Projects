import './App.css';

import { Col, Container, Navbar, Row } from 'react-bootstrap';

import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import { useState } from 'react';

function App() {
  const [bookId, setBookId] = useState(""); 
  const getBookIdHandler = (id) => {
    setBookId(id)
  }
  return (
    <>
      <Navbar bg="dark" variant='dark' className='header'>
        <Container>
          <Navbar.Brand href="#">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
