import React from "react";
import ListTweets from "./Components/ListTweets";
import {
  createList,
  reset,
  updateNewTweet,
  updateOldTweet
} from "./utils/utils";
import "./styles.scss";

const App = () => {
  const [list, updateList] = React.useState([]);

  React.useEffect(() => {
    if (list.length !== 0 && list[0].id >= 10000) {
      // If we had a list and the last tweet id is more or equal to than 10000
      // We reset the list and call the API to give us the feed
      reset(updateList);
    }
    const refresh = setInterval(() => {
      // Interval every 2 seconds to refresh the feed
      if (list.length === 0) {
        // If the list is empty, we initialise it
        createList(updateList);
      } else {
        // If list is not empty, we update with the newest tweets
        updateNewTweet(updateList, list);
      }
    }, 2000);
    return () => clearInterval(refresh);
  }, [list]);

  return (
    <div className="app">
      <ListTweets listTweet={list} />
      {list.length > 0 ? (
        <button onClick={() => updateOldTweet(updateList, list)}>back</button>
      ) : null}
    </div>
  );
};

export default App;
