import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <h1>Hello</h1>
      <img
        src="https://img1.hulu.com/user/v3/artwork/bce24897-1a74-48a3-95e8-6cdd530dde4c?base_image_bucket_name=image_manager&base_image=c04b9726-e4ec-48b6-9bf2-7ea8507b6b4d&size=600x338&format=jpeg"
        alt=""
      ></img>
      <p>This is a movie about coding</p>
      <h2>Movie title</h2>
      <p>Number of likes..</p>
    </div>
  );
}

export default VideoCard;
