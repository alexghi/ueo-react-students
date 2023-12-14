import React, { useEffect, useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import NewsPage from "./news";
import GalleryPage from "./gallery";
import CourseExample from "./CourseExample";
import Layout from "./Layout/Layout";

// Take in a component as argument WrappedComponent
const withMeteoData = (WrappedComponent) => {
  // And return another component
  const HOC = ({ temperature, ...rest }) => {
    const [currentTemperature, setTemperature] = useState(233);

    return (
      <WrappedComponent
        data={{ src: "something" }}
        temperature={currentTemperature}
        {...rest}
      />
    );
  };

  return HOC;
};

const MeteoTile = ({ children, ...rest }) => {
  const { temperature } = rest;
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid teal",
        backgroundColor: "aliceblue",
        borderRadius: "20px",
      }}
    >
      <div>current temp is:</div>
      {temperature ? <div>{temperature}</div> : null}
      {children ? children : null}
    </div>
  );
};

const VeryHotWeather = withMeteoData(MeteoTile);

const MeteoDetails = () => {
  return <div>meteo details</div>;
};

const SplitPanel = ({ left, right }) => {
  return (
    <div style={{ display: "flex", backgroundColor: 'aliceblue', height:'300px' }}>
      <div style={{ backgroundColor: "teal" }}>{left}</div>
      <div style={{ backgroundColor: "aliceblue" }}>{right}</div>
    </div>
  );
};


const withLoading = (Component) => {

  const withLoader = ({ isLoading }) => {
    if (isLoading) {
      return <div>loading</div>;
    }
    return <Component />;
  };

  return withLoader;
};

const StudentList = ( { data } ) => {
  return (
    <div>
      <ul>
        <li>student 1</li>
        <li>student 2</li>
      </ul>
    </div>
  );
};

const TeachersList = ({ data }) => {
  return (
    <div>
      <ul>
        <li>teacher 1</li>
        <li>teacher 2</li>
      </ul>
    </div>
  );
};

const StudentsWithLoading = withLoading(StudentList);
const TeachersWithLoading = withLoading(TeachersList);

function App() {
  const [isStudentsLoading, setStudentsLoading] = useState(true);

  const getStudentsData = async () => {
    return setTimeout(() => {
      setStudentsLoading(false);
      return Promise.resolve([
        { name: "student 1", id: 1 },
        { name: "student 2", id: 2 },
      ]);
    }, 4000);
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/example"
          element={
            <CourseExample
              name={"curs 10"}
              age={23}
              location={"Rome"}
              hobbies={["reading", "biking"]}
            >
              <StudentsWithLoading isLoading={isStudentsLoading} />
            </CourseExample>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
