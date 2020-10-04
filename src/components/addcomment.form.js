import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo, colorscheme }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({
        username: username,
        text: commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div
      id="add-comment-form"
      style={{ borderColor: colorscheme.replace("-scheme", "") }}
    >
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          className={colorscheme}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          className={colorscheme}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button className={`button-${colorscheme}`} onClick={() => addComment()}>
        Add Comment 🙌
      </button>
    </div>
  );
};

export default AddCommentForm;
