import React from "react";

const TweetItem = props => (
  <li id={props.id}>
    <div
      className="avatar"
      style={{ backgroundImage: `url(${props.avatar})` }}
    />
    <div className="desc">
      <p>{props.username}</p>
      <p>{props.text}</p>
    </div>
  </li>
);

export default TweetItem;
