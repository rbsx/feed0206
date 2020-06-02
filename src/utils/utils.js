import {
  getLatestTweets,
  resetTweets,
  getNewFeed,
  getOldFeed
} from "../apiCalls/apiCalls";

export const createList = async updateList => {
  const res = await getLatestTweets();
  if (res && res.data) {
    //Create the first feed in the state
    updateList(res.data);
  }
};

export const reset = async updateList => {
  // Call API to reset the feed of tweets
  const res = await resetTweets();
  // Returns true/false in res.data.success
  // If false, we call the reset function again (recursive function)
  if (!res || !res.data || !res.data.success) {
    reset(updateList);
  } else {
    // If yes, we empty and reinitialise the list of items in the state
    createList(updateList);
  }
};

export const updateNewTweet = async (updateList, list) => {
  //Get the newer Id, which is at the beginning of the list array
  const newerId = list[0].id;
  const res = await getNewFeed(newerId);
  if (res && res.data) {
    // We add the new items at the beginning of the feed
    const newFeed = [...res.data, ...list];
    updateList(newFeed);
  }
};

export const updateOldTweet = async (updateList, list) => {
  //Get the older Id, which is at the end of the list array
  const olderId = list[list.length - 1].id;
  const res = await getOldFeed(olderId);
  if (res && res.data) {
    // We add the old items at the end of the feed
    const newFeed = [...list, ...res.data];
    updateList(newFeed);
  }
};

export const refreshPosition = (e, updatePosition) => {
  let clientHeight = window.getElementByTagName("ul").clientHeight;
  updatePosition(window.pageYOffset);
  console.log("new position: ", clientHeight);
};
