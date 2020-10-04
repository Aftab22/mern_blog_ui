import React from "react";

const UpvoteSection = ({
  articleName,
  upvotes,
  setArticleInfo,
  colorscheme,
}) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <p>This post has been upvoted {upvotes} times</p>
      <br />
      <button
        onClick={() => upvoteArticle()}
        className={`button-${colorscheme}`}
      >
        Add Upvote 👍
      </button>
    </div>
  );
};

export default UpvoteSection;
