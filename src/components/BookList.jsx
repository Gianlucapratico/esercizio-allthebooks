import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../file json/horror.json";

function BookList() {
  return (
    <Container className="mt-5">
      <Row>
        {books.map((book) => (
          <SingleBook key={book.id} book={book} />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
