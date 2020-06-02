const axios = require("axios");

const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};

// To get the latest feed with one tweet
export const getLatestTweets = async () => {
  try {
    return await axios.get(
      "https://magiclab-twitter-interview.herokuapp.com/solene-bary/api?count=1",
      config
    );
  } catch (error) {
    console.error(error);
  }
};

// Reset the feed to 100 entries
export const resetTweets = async () => {
  try {
    return await axios.get(
      "https://magiclab-twitter-interview.herokuapp.com/solene-bary/reset",
      config
    );
  } catch (error) {
    console.error(error);
  }
};

// Get the 2 next tweets in the feed after the last Id of the feed
export const getNewFeed = async lastId => {
  try {
    return await axios.get(
      `https://magiclab-twitter-interview.herokuapp.com/solene-bary/api?count=2&afterId=${lastId}`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

// Get the 2 past tweets in the feed before the first Id of the feed
export const getOldFeed = async olderId => {
  try {
    return await axios.get(
      `https://magiclab-twitter-interview.herokuapp.com/solene-bary/api?count=2&beforeId=${olderId}`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
