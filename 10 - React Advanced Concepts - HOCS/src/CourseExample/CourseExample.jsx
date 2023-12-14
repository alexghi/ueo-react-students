import React from "react";

const GeographicalDetails = ({ age, ...rest }) => {
  return (
    <>
      <h2>Geographical details</h2>
      <div>age is {age}</div>
      {/* <div>location is {location}</div> */}
    </>
  );
};

const CourseExample = ({ name, children, ...rest }) => {
  // const name = props.name
  // const { name } = props
  // console.log(rest.age)
  console.log(children)
  return (
    <div>
      course example - {name}
      {/* <GeographicalDetails {...rest} /> */}
       {children}
    </div>
  );
};

export default CourseExample;
