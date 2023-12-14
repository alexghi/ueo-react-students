import React from "react";

const Article = ({ title, content }) => {
  return (
    <div className="article">
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
};

export default Article;
