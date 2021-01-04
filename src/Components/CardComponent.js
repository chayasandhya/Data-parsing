import React from "react";

export const CardComponent = (props) => {
  return (
    <div className="content">
      <h4>{props.each.userId}</h4>
      <div className="titleAndBody">
        <h2>{props.each.title}</h2>
        <p>{props.each.body}</p>
      </div>
    </div>
  );
};
