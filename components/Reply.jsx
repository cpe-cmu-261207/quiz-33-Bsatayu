import React from "react";
import Count from "./Count";

export default function Reply(props) {
  return (<div className="d-flex gap-2 my-2 ps-5">
    <img
      src={props.profile_img}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <div
      className="rounded rounded-3 p-2"
      style={{ backgroundColor: "#3A3B3C" }}
    >
      <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
        {props.owner}
      </span>
      <br />
      <span style={{ color: "#E4E6EB" }}>{props.content}</span>
      <Count like={props.like} />
    </div>
  </div>);
}