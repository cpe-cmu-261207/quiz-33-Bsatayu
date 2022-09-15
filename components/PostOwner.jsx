import React from "react";

export default function PostOwner(props) {
  return <div className="vstack gap-3">
    
    <div className="d-flex align-items-center gap-3">
      <img
        src={props.profile_img}
        // src="/profileImages/handsome.jpg"
        width="48"
        height="48"
        className="rounded-circle"
      />
      <span className="fw-semibold fs-4 text-white">
        {props.owner}
      </span>
    </div>
    <span className="text-white">
      {props.content}
    </span>
    <div className="d-flex align-items-center gap-2">
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#23EAFA " }}>{props.like}</span>
    </div>
    <hr className="m-0 border" />
  </div>;
}