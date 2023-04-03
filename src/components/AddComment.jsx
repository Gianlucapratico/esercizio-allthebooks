import React, { useState } from "react";

const AddComment = ({ bookId, comments, setComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          method: "POST",
          body: JSON.stringify({ comment }),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2FlZWY4MWI0MjAwMTM5YjI4NDUiLCJpYXQiOjE2ODA1MjQzMzEsImV4cCI6MTY4MTczMzkzMX0.EpS1YIkJh6AwyEEx0E4tDNd1uFxYL1J4UwC2jfgum18",
          },
        }
      );
      if (response.ok) {
        const updatedComments = [...comments, { comment }];
        setComments(updatedComments);
        setComment("");
      } else {
        console.log("An error occurred while adding comment.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add your comment here"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;
