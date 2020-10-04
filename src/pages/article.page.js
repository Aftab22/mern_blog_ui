import React, { useState, useEffect } from "react";
import ArticleList from "../components/article.list.item";
import myArticles from "./article-content/articles.content";
import PageNotFound from "./PageNotFound.page";
import CommentsList from "../components/comment.list";
import UpvoteSection from "../components/upvote.section";
import AddCommentForm from "../components/addcomment.form";

const ArticlesPage = ({ match }) => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const articleNameFromURL = match.params.name;
  const article = myArticles.find(
    (article) => article.name === articleNameFromURL
  );

  const otherArticles = myArticles.filter(
    (article) => article.name !== articleNameFromURL
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${articleNameFromURL}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [articleNameFromURL]);

  if (!article) {
    return <PageNotFound />;
  }

  return (
    <React.Fragment>
      <h1 className={article.colorscheme}>{article.title}</h1>
      <img src={article.img} alt="blog-banner" style={{ padding: "10px" }} />
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <UpvoteSection
        articleName={articleNameFromURL}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
        colorscheme={article.colorscheme}
      />

      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm
        articleName={articleNameFromURL}
        colorscheme={article.colorscheme}
        setArticleInfo={setArticleInfo}
      />
      <div id="other-articles">
        <h3>Other Articles:</h3>
        <ArticleList articles={otherArticles} />
      </div>
    </React.Fragment>
  );
};
export default ArticlesPage;
