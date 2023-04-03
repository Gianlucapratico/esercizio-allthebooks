import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../file json/horror.json";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col md={6} lg={3} key={book.id}>
            <Card className="my-3 mt-5">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
