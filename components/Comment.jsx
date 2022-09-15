import React from "react";
import Count from "./Count";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      <div className="d-flex gap-2">
        <img
          src={props.profile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-2"
          style={{ backgroundColor: "Grey" }}
        >
          <span className="fw-semibold" style={{color: "#F3F9A2  " }}>
            {props.owner}
          </span>
          <br />
          <span style={{ color: "#F3F9A2 " }}>{props.content}</span>
          <Count like={props.like} />
        </div>
      </div>

      {props.replies.map((reply, i) => {
        return <Reply
          key={i}
          owner={reply.username}
          content={reply.replyText}
          profile_img={reply.userImagePath}
          like={reply.likeNum}
        />
      })}</div>
  );
}