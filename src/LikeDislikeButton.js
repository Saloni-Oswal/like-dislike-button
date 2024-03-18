import { useState } from "react";
import classNames from "classnames";

const LikeDislikeButton = () => {
  const [likeCount, setLikeCount] = useState(100);
  const [isLiked, setIsLiked] = useState(false);

  const buttonClasses = classNames("likes-button", `${isLiked ? "liked" : ""}`);

  const likeDislike = () => {
    if (isLiked) {
      setLikeCount((prevLikeCount) => prevLikeCount - 1);
    } else {
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button onClick={likeDislike} className={buttonClasses}>
      {`${isLiked ? "Dislike" : "Like"}`} |{" "}
      <span className="likes-counter">{likeCount}</span>
    </button>
  );
};

export default LikeDislikeButton;
