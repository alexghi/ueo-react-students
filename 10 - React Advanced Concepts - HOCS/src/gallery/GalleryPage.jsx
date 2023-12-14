import React, { useCallback, useState } from "react";
import MyCustomButton from "../common/MyCustomButton";

const GalleryPage = () => {
  const myHeaders = new Headers();
  const [pod, setPod] = useState(null);

  myHeaders.append(
    "Authorization",
    "Bearer BQA4Q6JNkveGEoKEuwfDeqcl47r-SX-6L5nSJPUGIGttIHMkDJEJY7qOgsF_nuwaJhiUlizzY4RRZbf-OcPTgs_WQhp2Drzm5ijLtEHRE6xy1arY3N_1gg16QtNyN4wJGLkwEDMV61AWkekbTRpDaeNOXDhzYTkgiB_J3TLu"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getPictureOfTheDay = useCallback(async () => {
    await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY_GOES_HERE`,
      requestOptions
    )
      .then((response) => response.json())
      .then((nasaPicture) => {
        setPod(nasaPicture);
      });
  });

  return (
    <div>
      <MyCustomButton text="get POD" onClick={getPictureOfTheDay} />
      {pod ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            backgroundColor: "aliceblue",
          }}
        >
          <div style={{ display: "inline-flex" }}>
            <h3 style={{ backgroundColor: "aliceblue" }}>{pod.title}</h3>
            <span
              style={{
                borderRadius: "5px",
                color: "#dedede",
                backgroundColor: "blueviolet",
                padding: "5px",
                marginBottom: "2px",
                alignSelf: "center",
                marginLeft: "10px",
              }}
            >
              {pod.copyright}
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <img
              height={400}
              src={pod.hdurl}
              style={{ borderRadius: "10px", marginRight: "10px" }}
            />
            <span>{pod.explanation}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPage;
