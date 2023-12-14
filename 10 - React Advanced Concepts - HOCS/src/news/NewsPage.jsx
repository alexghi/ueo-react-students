import React, { useCallback, useEffect, useState } from "react";
import MyCustomButton from "../common/MyCustomButton";
import News from "./News";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    await fetch("https://newsapi.org/v2/everything?q=volvo&from=2023-02-01", {
      headers: {
        "X-Api-Key": "YOUR_API_KEY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [setNews, setLoading]);

  // on demand get data
  const onGetNewsBtnClick = useCallback(async () => {
    // fetch request will go here
    getData();
  });

  // on application load
  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className={`loader loader${!loading ? "-hide" : "-show"}`}></div>
      ) : (
        <div>
          <MyCustomButton text={"Get News"} onClick={onGetNewsBtnClick} />

          <News news={news} />
        </div>
      )}
    </div>
  );
};

export default NewsPage;
