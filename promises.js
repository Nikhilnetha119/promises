const posts = [];
let lastUserActivityTime = null;

function createPost(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastUserActivityTime = new Date();
      resolve(lastUserActivityTime);
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete");
      }
    }, 1000);
  });
}

async function main() {
  try {
    const post1 = await createPost("First Post");
    const post2 = await createPost("Second Post");

    const [activityTime, deletedPost] = await Promise.all([
      updateLastUserActivityTime(),
      deleteLastPost(),
    ]);

    console.log("All Posts:", posts);
    console.log("Last Activity Time:", activityTime);
    console.log("Deleted Post:", deletedPost);

    console.log("Remaining Posts:", posts);
  } catch (error) {
    console.error(error);
  }
}

main();
