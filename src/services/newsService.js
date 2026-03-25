/**
 * Fetches trending tech news from Reddit
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of news items in standardized format
 */
export const fetchRedditNews = async (limit = 10) => {
  try {
    // Using Reddit's public JSON API (no authentication required)
    const response = await fetch(
      `https://www.reddit.com/r/technology/hot.json?limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`);
    }

    const data = await response.json();

    // Check for API errors
    if (data.error) {
      throw new Error(`Reddit API error: ${data.error}`);
    }

    // Transform to standardized format
    const posts = data.data.children
      .filter(child => child.data && child.data.title && child.data.url)
      .map(child => ({
        title: child.data.title,
        url: child.data.url,
        author: child.data.author,
        score: child.data.score,
        numComments: child.data.num_comments,
        created: new Date(child.data.created_utc * 1000).toLocaleDateString(),
        thumbnail: child.data.thumbnail && child.data.thumbnail.startsWith('http') 
          ? child.data.thumbnail 
          : null,
        subreddit: child.data.subreddit
      }));

    return posts;
  } catch (error) {
    console.error('Reddit API Error:', error);
    throw error;
  }
};
