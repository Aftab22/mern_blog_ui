import React from "react";
import myArticles from "./article-content/articles.content";
import ArticleList from "../components/article.list.item";

const ArticlesListPage = () => (
  <React.Fragment>
    <h1>Articles List</h1>
    <ArticleList articles={myArticles} />
  </React.Fragment>
);

export default ArticlesListPage;
