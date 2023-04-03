import React, { Component } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      comments: [],
    };
  }

  componentDidMount() {
    const { bookId } = this.props;
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2FlZWY4MWI0MjAwMTM5YjI4NDUiLCJpYXQiOjE2ODA1MjQzMzEsImV4cCI6MTY4MTczMzkzMX0.EpS1YIkJh6AwyEEx0E4tDNd1uFxYL1J4UwC2jfgum18",
      },
    })
      .then((response) => response.json())
      .then((comments) => this.setState({ comments, isLoading: false }));
  }

  render() {
    const { comments, isLoading } = this.state;

    return (
      <div>
        <h3>Comments:</h3>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>
                <strong>{comment.author}</strong> - {comment.comment} -{" "}
                <small>{comment.createdAt}</small> <CommentsList />
                <AddComment />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CommentArea;
