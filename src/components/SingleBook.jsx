import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Col md={6} lg={3} key={book.id}>
        <Card className={this.state.selected ? "border border-5" : null}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{book.price}€</small>

            {this.state.selected && <CommentArea bookId={book.asin} />}
            <button
              onClick={() => this.setState({ selected: !this.state.selected })}
            >
              Click Here
            </button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
