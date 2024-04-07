import SideBar from "./SideBar";
import NewPost from "./NewPost";
import Post from "./Post";

function FeedScenes() {
  return (
    <>
      <div className="feed-top"></div>
      <SideBar />
      <div className="feed">
        <NewPost />
        <Post />
      </div>
    </>
  );
}

export default FeedScenes;
