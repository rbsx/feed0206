import React from "react";
import TweetItem from "./TweetItem";
import { refreshPosition } from "../utils/utils";

const ListTweets = props => {
  let tweet = props.listTweet.map(item => (
    <TweetItem
      avatar={item.image}
      id={item.id}
      key={item.id}
      text={item.text}
      username={item.username}
    />
  ));
  return (
    <ul onScroll={e => refreshPosition(e, props.updatePosition)}>{tweet}</ul>
  );
};

export default ListTweets;
