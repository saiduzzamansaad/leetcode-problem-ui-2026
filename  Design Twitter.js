class Twitter {
      constructor() {
          this.userFollows = new Map();    // userId -> Set of followees
          this.userTweets = new Map();     // userId -> Array of [tweetId, timestamp]
          this.time = 0;                   // global timestamp
      }
  
      postTweet(userId, tweetId) {
          if (!this.userTweets.has(userId)) this.userTweets.set(userId, []);
          this.userTweets.get(userId).push([tweetId, this.time++]);
  
          if (!this.userFollows.has(userId)) {
              this.userFollows.set(userId, new Set());
              this.userFollows.get(userId).add(userId); // follow self
          }
      }
  
      getNewsFeed(userId) {
          if (!this.userFollows.has(userId)) return [];
  
          const tweets = [];
          for (let followee of this.userFollows.get(userId)) {
              if (!this.userTweets.has(followee)) continue;
              const feed = this.userTweets.get(followee);
              // get last 10 tweets
              for (let i = Math.max(feed.length - 10, 0); i < feed.length; i++) {
                  tweets.push(feed[i]);
              }
          }
  
          // Sort tweets by timestamp descending
          tweets.sort((a, b) => b[1] - a[1]);
          return tweets.slice(0, 10).map(t => t[0]);
      }
  
      follow(followerId, followeeId) {
          if (followerId === followeeId) return;
          if (!this.userFollows.has(followerId)) this.userFollows.set(followerId, new Set([followerId]));
          this.userFollows.get(followerId).add(followeeId);
      }
  
      unfollow(followerId, followeeId) {
          if (followerId === followeeId) return;
          if (!this.userFollows.has(followerId)) return;
          this.userFollows.get(followerId).delete(followeeId);
      }
  }