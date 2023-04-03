import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <footer>
      <Container className="bg-dark text-light py-3  mt-5 rounded border border border-4 ">
        <Row>
          <Col md={6}>
            <p>&copy; 2023 My Company</p>
          </Col>
          <Col md={6} className="text-md-end ">
            <p>Contact Us</p>
          </Col>
          <Col md={6}>
            <p>Lavora con noi</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>altro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
