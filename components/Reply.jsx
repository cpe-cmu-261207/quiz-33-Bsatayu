import React from "react";
import Count from "./Count";

export default function Reply(props) {
  return (<div className="d-flex gap-2 my-2 ps-5">
    <img
      src={props.profile_img}
      width="48"
      height="48"
      className="rounded-circle"
    />
    <div
      className="rounded rounded-3 p-2"
      style={{ backgroundColor: "Grey" }}
    >
      <span className="fw-semibold" style={{ color: "White" }}>
        {props.owner}
      </span>
      <br />
      <span style={{ color: "White" }}>
        {props.content}</span>
      <Count like={props.like} />
    </div>
  </div>);
}