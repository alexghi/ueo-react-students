import React from "react";
import Article from "./Article";

const News = ({ news }) => {
  if (news.length === 0) {
    return <div>no news yet </div>;
  }

  return (
    <div>
      {news.map((newsArticle) => {
        const { title, content } = newsArticle;
        return <Article key={title} title={title} content={content} />;
      })}
    </div>
  );
};

export default News;
