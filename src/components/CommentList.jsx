import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
