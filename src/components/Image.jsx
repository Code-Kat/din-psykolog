import React from "react";

function Image({ img, userName, userLink }) {
  return (
    <div className="image">
      <img src={img} alt="" className="" />
      <p className="image__credits">
        Image from <a href={userLink}>{userName}</a> at{" "}
        <a href="https://unsplash.com/">Unsplash.com</a>.
      </p>
    </div>
  );
}

export default Image;
