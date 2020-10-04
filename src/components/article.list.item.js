import React from "react";
import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article, index) => (
        <Link
          className="article-list-item"
          key={index}
          to={`/article/${article.name}`}
        >
          <h3 className={article.colorscheme}>{article.title}</h3>
          <p>
            {article.content.length && article.content[0].substring(0, 150)}...
          </p>
        </Link>
      ))}
    </>
  );
}
