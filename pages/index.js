import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "700px", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner
          like={9982}
          owner="Satayu Settakit 620610809"
          content="ยากจัง"
          profile_img="/profileImages/IMAGE1.jpg"
        />

        {/* Comment Example */}
        {comments.map((comment, i) => {
          return <Comment
            key={i}
            like={comment.likeNum}
            owner={comment.username}
            content={comment.commentText}
            profile_img={comment.userImagePath}
            replies={comment.replies}
          />
        })}
      </div >
    </div>
  );
}